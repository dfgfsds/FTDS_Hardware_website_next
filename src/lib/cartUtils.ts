import { getCartApi, postCartCreateApi, postCartitemApi } from '@/api-endpoints/CartsApi';

export interface GuestCartItem {
  id: string;
  product: number;
  quantity: number;
}

const GUEST_CART_KEY = 'guest_cart';

export const getGuestCart = (): GuestCartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(GUEST_CART_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Error reading guest cart:', e);
    return [];
  }
};

export const saveGuestCart = (cart: GuestCartItem[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(GUEST_CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('guestCartUpdated'));
  } catch (e) {
    console.error('Error saving guest cart:', e);
  }
};

export const clearGuestCart = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(GUEST_CART_KEY);
    window.dispatchEvent(new Event('guestCartUpdated'));
  } catch (e) {
    console.error('Error clearing guest cart:', e);
  }
};

export const addToGuestCart = (productId: number, quantity: number = 1): GuestCartItem[] => {
  const cart = getGuestCart();
  const existingIndex = cart.findIndex((item) => Number(item.product) === Number(productId));
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: `guest_${productId}`,
      product: Number(productId),
      quantity: quantity,
    });
  }
  saveGuestCart(cart);
  return cart;
};

export const updateGuestCartQty = (
  idOrProductId: any,
  type: 'increase' | 'decrease' | number
): GuestCartItem[] => {
  const cart = getGuestCart();
  const index = cart.findIndex(
    (item) => item.id === idOrProductId || Number(item.product) === Number(idOrProductId)
  );
  if (index === -1) return cart;

  if (typeof type === 'number') {
    if (type <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = type;
    }
  } else if (type === 'increase') {
    cart[index].quantity += 1;
  } else if (type === 'decrease') {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
  }
  saveGuestCart(cart);
  return cart;
};

export const removeFromGuestCart = (idOrProductId: any): GuestCartItem[] => {
  const cart = getGuestCart();
  const updated = cart.filter(
    (item) => item.id !== idOrProductId && Number(item.product) !== Number(idOrProductId)
  );
  saveGuestCart(updated);
  return updated;
};

export const handlePostLoginCartSync = async (
  userId: string | number,
  vendorId?: string | number | null,
  userName?: string
): Promise<string | null> => {
  if (typeof window === 'undefined' || !userId) return null;

  try {
    let cartId: any = null;
    const cartRes = await getCartApi(`user/${userId}`);
    const cartData = Array.isArray(cartRes?.data) ? cartRes?.data[0] : cartRes?.data;

    if (cartData?.id) {
      cartId = cartData.id;
    } else {
      const createRes = await postCartCreateApi('', {
        user: Number(userId),
        vendor: Number(vendorId) || 87,
        created_by: userName || 'user',
      });
      const createdData = Array.isArray(createRes?.data) ? createRes?.data[0] : createRes?.data;
      if (createdData?.id) {
        cartId = createdData.id;
      }
    }

    if (cartId) {
      localStorage.setItem('cartId', String(cartId));

      const guestItems = getGuestCart();
      if (guestItems.length > 0) {
        for (const item of guestItems) {
          try {
            await postCartitemApi('', {
              cart: cartId,
              product: item.product,
              user: Number(userId),
              vendor: Number(vendorId) || 87,
              quantity: item.quantity,
              created_by: userName || 'user',
            });
          } catch (itemErr) {
            console.error('Error syncing guest cart item:', item, itemErr);
          }
        }
        clearGuestCart();
      }
    }
    return cartId ? String(cartId) : null;
  } catch (err) {
    console.error('Cart sync error on login:', err);
    return null;
  }
};
