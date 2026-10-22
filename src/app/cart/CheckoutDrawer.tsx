'use client';

import { getVendorDeliveryDetailsApi, patchUserSelectAddressAPi, updateUserAPi } from '@/api-endpoints/authendication';
import { getAddressApi, getAppliedCouponDataApi, postApplyCouponApi } from '@/api-endpoints/CartsApi';
import { InvalidateQueryFilters, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2, MapPin, Phone, X } from 'lucide-react';
import toast from 'react-hot-toast';

import { useCallback, useEffect, useState } from 'react';
import { useVendor } from '@/context/VendorContext';
import { useUser } from '@/context/UserContext';
import { useCartItem } from '@/context/CartItemContext';
import Image from 'next/image';
import check from "../../../public/check.png";
import { useRouter } from 'next/navigation';
import { baseUrl } from '@/api-endpoints/ApiUrls';

interface CheckoutSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    subtotal: any;
}

const CheckoutDrawer = ({ isOpen, onClose, subtotal }: CheckoutSidebarProps) => {

    const [getUserName, setUserName] = useState<string | null>(null);
    const [getCartId, setCartId] = useState<string | null>(null);
    const [selectedAddressId, setSelectedAddressId] = useState<string>();
    const [paymentValue, setPaymentValue] = useState('')
    const [deliveryInfo, setDeliveryInfo] = useState<any>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const queryClient = useQueryClient();
    const router = useRouter();
    const { vendorId } = useVendor()
    const { user, setUser } = useUser();
    const { refetchCart } = useCartItem();
    const [code, setCode] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const [error, setError] = useState('');
    const [userId, setUserId] = useState<string | null>(null);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const [phoneInput, setPhoneInput] = useState('');
    const [isUpdatingPhone, setIsUpdatingPhone] = useState(false);
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);

    useEffect(() => {
        setUserName(user?.data?.name || (typeof window !== 'undefined' ? localStorage.getItem('userName') : null));
        setUserId(user?.data?.id || (typeof window !== 'undefined' ? localStorage.getItem('userId') : null));
    }, [user?.data?.id, user?.data?.name, isOpen]);

    const { data, isLoading }: any = useQuery({
        queryKey: ['getAddressData', userId],
        queryFn: () => getAddressApi(`user/${userId}`),
        enabled: !!userId,
    });

    useEffect(() => {
        if (data?.data?.length) {
            const selected = data?.data?.find((address: any) => address?.selected_address === true);
            if (selected?.id) {
                setSelectedAddressId(String(selected?.id));
            }
        }
    }, [data]);

    const handleSelectAddress = async (id: any) => {
        try {
            const upadetApi = await patchUserSelectAddressAPi(`user/${userId}/address/${id?.id}`, { updated_by: getUserName ? getUserName : 'user' })
            if (upadetApi) {
                queryClient.invalidateQueries(['getAddressData'] as InvalidateQueryFilters);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const getDeliveryCharge = async () => {

    //     try {
    //         const userId = user?.data?.id || localStorage.getItem('userId');
    //         if (!userId) throw new Error("User ID not found");
    //         const res = await axios.get(`${baseUrl}/vendor-site-payment-delivery-partner-details/${vendorId}/`)
    //         setDeliveryInfo(res.data[0]);
    //         console.log(res?.data[0], "delivery");

    //     } catch (error) {
    //         console.error("Error fetching delivery charge:", error);
    //     }
    // }

    const getDeliveryCharge = useCallback(async () => {
        try {
            const userId = user?.data?.id || localStorage.getItem('userId');
            if (!userId) throw new Error("User ID not found");

            const res = await axios.get(
                `${baseUrl}/vendor-site-payment-delivery-partner-details/${vendorId}/`
            );

            setDeliveryInfo(res.data[0]);
        } catch (error) {
            console.error("Error fetching delivery charge:", error);
        }
    }, [vendorId, user?.data?.id]);

    // useEffect(() => {
    //     getDeliveryCharge()
    // }, [paymentMethod])

    useEffect(() => {
        getDeliveryCharge();
    }, [paymentMethod, getDeliveryCharge]);

    // getAppliedCouponDataApi
    const getAppliedCouponData: any = useQuery({
        queryKey: ['getAppliedCouponDataData', userId],
        queryFn: () => getAppliedCouponDataApi(`?user_id=${userId}`),
        enabled: !!userId
    })
    const getVendorDeliveryDetailsData: any = useQuery({
        queryKey: ['getVendorDeliveryDetailsData', vendorId],
        queryFn: () => getVendorDeliveryDetailsApi(`${vendorId}`),
        enabled: !!vendorId
    })

    // const RAZOR_PAY_KEY = 'rzp_live_a75FMOGSs8bCvB';
    const RazorPayKey = getVendorDeliveryDetailsData?.data?.data?.vendor_site_details?.payment_gateway_client_id;

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        setIsChecking(true);

        const payload = {
            user_id: Number(userId),
            coupon_code: code,
            vendor_id: vendorId,
            updated_by: getUserName || 'user'
        };

        try {
            const updateApi = await postApplyCouponApi("", payload);
            if (updateApi) {
                getDeliveryCharge()
            }
        } catch (error: any) {
            setError(error?.response?.data?.error || "Failed to apply coupon. Please try again.");
        } finally {
            setIsChecking(false);
        }
    };

    const handleUpdatePhone = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        const cleanedPhone = phoneInput.trim();
        if (!cleanedPhone) {
            toast.error("Mobile number is required");
            return;
        }

        if (!/^\d{10}$/.test(cleanedPhone)) {
            toast.error("Mobile number must be exactly 10 digits");
            return;
        }

        try {
            setIsUpdatingPhone(true);
            const uId = user?.data?.id || userId || localStorage.getItem('userId');
            if (!uId) throw new Error("User ID not found");

            const response = await updateUserAPi(`/${uId}`, {
                contact_number: cleanedPhone,
                updated_by: user?.data?.name || getUserName || "user",
                role: 3,
                vendor: vendorId || 87,
            });

            if (response) {
                queryClient.invalidateQueries(["getUserData"] as InvalidateQueryFilters);
                if (setUser && user) {
                    setUser({
                        ...user,
                        data: {
                            ...user.data,
                            contact_number: cleanedPhone,
                        },
                    });
                }
                toast.success("Profile updated successfully");
                setShowPhoneModal(false);

                // Recall placeOrder immediately with the updated phone number!
                await executePlaceOrder(cleanedPhone);
            }
        } catch (error: any) {
            console.error("Update failed:", error);
            toast.error(
                error?.response?.data?.error ||
                error?.response?.data?.message ||
                "Failed to update profile, please try again."
            );
        } finally {
            setIsUpdatingPhone(false);
        }
    };

    const placeOrder = () => {
        const phone = user?.data?.contact_number || user?.contact_number;
        if (!phone || String(phone).trim() === '') {
            setPhoneInput('');
            setShowPhoneModal(true);
            return;
        }
        executePlaceOrder(String(phone).trim());
    };

    const executePlaceOrder = async (phoneOverride?: string) => {
        try {
            setIsPlacingOrder(true);
            const currentUserId = user?.data?.id || userId || localStorage.getItem('userId');
            if (!currentUserId) throw new Error("User ID not found");
            if (!selectedAddressId) throw new Error("No address selected");

            const phone = phoneOverride || user?.data?.contact_number || user?.contact_number;
            if (!phone || String(phone).trim() === '') {
                setPhoneInput('');
                setShowPhoneModal(true);
                return;
            }

            const payload = {
                user_id: parseInt(currentUserId),
                vendor_id: vendorId || 87,
                customer_phone: String(phone).trim(),
            };

            if (paymentMethod === "cod") {
                const response = await axios.post(`${baseUrl}/cod-pay-now/`, payload);
                console.log("COD Order placed:", response.data);
                refetchCart();
                setShowSuccessModal(true);

                setTimeout(() => {
                    setShowSuccessModal(false);
                    router.push("/profile?tab=Orders");
                }, 5000);
            } else {
                const response = await axios.post(`${baseUrl}/prepaid-pay-now/`, payload);
                const { payment_order_id, final_price } = response.data;

                const options = {
                    key: RazorPayKey,
                    amount: final_price * 100,
                    currency: "INR",
                    name: "FTDS Hardwares",
                    description: "Order Payment",
                    order_id: payment_order_id,
                    handler: function (response: any) {
                        console.log("Payment Success:", response);
                        refetchCart();
                        setShowSuccessModal(true);

                        setTimeout(() => {
                            setShowSuccessModal(false);
                            router.push("/profile?tab=Orders");
                        }, 5000);
                    },
                    prefill: {
                        name: user?.data?.name || user?.name || getUserName,
                        email: user?.data?.email || user?.email,
                        contact: String(phone).trim(),
                    },
                    notes: {
                        address: "Selected Address",
                    },
                    theme: {
                        color: "#f97316"
                    },
                };

                const razor = new (window as any).Razorpay(options);
                razor.open();
            }
        } catch (error: any) {
            console.error("Error placing order:", error);
            const errMsg = error?.response?.data?.message || error?.response?.data?.error || "";
            if (
                typeof errMsg === "string" &&
                (errMsg.toLowerCase().includes("customer_phone") ||
                 errMsg.toLowerCase().includes("missing required fields"))
            ) {
                setPhoneInput('');
                setShowPhoneModal(true);
                return;
            }
            setShowFailureModal(true);
            setTimeout(() => {
                setShowFailureModal(false);
                router.push("/cart");
            }, 5000);
        } finally {
            setIsPlacingOrder(false);
        }
    };

    function formatPrice(price: number): string {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
        }).format(price);
    }


    if (!isOpen) return null;

    return (
        <>
            {/* Sidebar Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg transform transition-transform duration-300 z-[10001] ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">Checkout</h2>
                    <X className="cursor-pointer" onClick={onClose} />
                </div>

                <div className="p-4 space-y-6">

                    {data?.data?.length ? (
                        <div className="space-y-2">
                            <p className="mt-2 inline-block text-sm text-orange-500 hover:text-orange-600 cursor-pointer flex justify-end"
                                onClick={() => { router.push('/profile?tab=Address') }}>Manage address</p>
                            {data?.data
                                ?.map((address: any) => (
                                    <label
                                        key={address.id}
                                        className={`flex items-start p-3 rounded-lg border cursor-pointer
                                 ${selectedAddressId === address.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                                    >
                                        <input
                                            type="radio"
                                            name="deliveryAddress"
                                            value={address.id}
                                            checked={selectedAddressId === String(address.id)}
                                            onChange={() => { handleSelectAddress(address) }}
                                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                {address.street}
                                                {address.isDefault && (
                                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                        Default
                                                    </span>
                                                )}
                                            </p>
                                            <p className="text-sm text-gray-800">
                                                {address.address_type}
                                            </p>
                                            <p className="text-sm text-gray-800">
                                                {address.email_address} | {address.contact_number}
                                            </p>
                                            <p className="text-sm text-black">
                                                {address.city}, {address.state} {address.zipCode}
                                            </p>
                                        </div>
                                    </label>
                                ))}
                        </div>
                    ) : (

                        <div className="text-center p-4 bg-gray-50 rounded-lg mb-3">
                            <MapPin className="mx-auto h-8 w-8 text-gray-400" />
                            <p className="mt-2 text-sm text-gray-600">No delivery address found</p>
                            <p className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
                                onClick={() => {
                                    router.push('/profile?tab=addresses')
                                }
                                    //  setOpenMoadl(!openModal)
                                }
                            >
                                Add a delivery address
                            </p>
                        </div>

                    )}
                    {/* Payment Method */}
                    <div className="mb-4">
                        <label className="block text-black mb-2 font-medium text-sm font-squares">Payment Method</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-full p-2 rounded-md  border border-gray-600"
                        >
                            <option value="">Prepaid</option>
                            <option value="cod">Cash on Delivery (COD)</option>
                        </select>
                    </div>

                    {getAppliedCouponData?.data?.data?.applied_coupons?.length ? (
                        <>
                            <div className="bg-orange-50 p-4 rounded-lg space-y-2 flex justify-between">
                                <div className=''>
                                    <p className="text-sm text-orange-700 font-bold mb-2">
                                        Applied Coupon: {getAppliedCouponData?.data?.data?.data[0]?.code}
                                    </p>

                                    <p className="text-sm text-orange-700 font-bold">
                                        Discount Amount: ₹{getAppliedCouponData?.data?.data?.applied_coupons[0]?.discount || 0}
                                    </p>
                                </div>
                                <button
                                    // onClick={handleRemoveCoupon}
                                    className="text-[#a5291b] border-red-300 hover:bg-red-50"
                                >
                                    Remove Coupon
                                </button>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h2 className="text-lg font-semibold mb-1">Coupon</h2>
                            <div className="flex items-center gap-2 mb-2">
                                <input
                                    type="text"
                                    placeholder="Discount code"
                                    className="bg-white w-full p-2"
                                    value={code}
                                    onChange={(e: any) => setCode(e.target.value.toUpperCase())}
                                />
                                <button disabled={!code || isChecking} onClick={handleSubmit} className="whitespace-nowrap bg-orange-500 p-2 rounded-md text-white font-bold hover:bg-orange-700">

                                    {isChecking ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        'Apply'
                                    )}
                                </button>
                            </div>
                            {error && (
                                <p className="text-sm text-[#a5291b]">Coupon not found!</p>
                            )}
                        </div>
                    )}


                    {/* Delivery Charge */}
                    <div className="border-t pt-4">
                        <p className="text-sm">
                            Delivery Charges: <span className="font-semibold">{formatPrice(Number(deliveryInfo?.own_delivery_charge))}</span>
                        </p>
                    </div>
                    <span>Total <span className="text-sm">(final price including delivery):</span>  </span>
                    <span>{formatPrice(Number(deliveryInfo?.own_delivery_charge) + Number(subtotal))}</span>

                    {/* Place Order Button */}
                    <button
                        onClick={placeOrder}
                        disabled={!selectedAddressId || isPlacingOrder}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium transition flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {isPlacingOrder ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Processing Order...
                            </>
                        ) : (
                            'Place Order'
                        )}
                    </button>
                </div>
            </div >

            {/* Backdrop */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => onClose()}
                    />
                )
            }
            {showSuccessModal && (
                <div className="fixed inset-0 z-[10010] flex items-center justify-center bg-black/50">

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm ">
                        <Image alt='image' className='mx-auto mb-3' src={check} width={100} height={100} />
                        <h2 className="text-lg font-bold text-orange-600 mb-2">Order Placed Successfully!</h2>
                        <p className="text-gray-600">You will be redirected to your orders shortly...</p>
                    </div>
                </div>
            )}

            {/* Failure Modal */}
            {showFailureModal && (
                <div className="fixed inset-0 z-[10010] flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                        <h2 className="text-lg font-bold text-red-600 mb-2">Order Failed</h2>
                        <p className="text-gray-600">You will be redirected back to your cart.</p>
                    </div>
                </div>
            )}

            {/* Phone Number Required Modal */}
            {showPhoneModal && (
                <div className="fixed inset-0 z-[10020] flex items-center justify-center bg-black/60 p-4">
                    <div
                        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in-95"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <Phone className="h-5 w-5 text-orange-500" />
                                Enter Mobile Number
                            </h3>
                            <button
                                onClick={() => setShowPhoneModal(false)}
                                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">
                            Please provide your 10-digit mobile number to proceed with order placement.
                        </p>

                        <form onSubmit={handleUpdatePhone} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        maxLength={10}
                                        value={phoneInput}
                                        onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ''))}
                                        placeholder="Enter 10-digit mobile number"
                                        className="pl-12 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                                        autoFocus
                                    />
                                </div>
                                {phoneInput && phoneInput.length !== 10 && (
                                    <p className="text-red-500 text-xs mt-1">Mobile number must be exactly 10 digits</p>
                                )}
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowPhoneModal(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isUpdatingPhone || phoneInput.length !== 10}
                                    className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition flex items-center gap-2 disabled:opacity-50"
                                >
                                    {isUpdatingPhone ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        'Save & Place Order'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CheckoutDrawer;
