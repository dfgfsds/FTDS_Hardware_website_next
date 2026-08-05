// import { useState, useEffect } from 'react';
// import { Loader, X } from 'lucide-react';
// import { postAddressCreateApi, updateAddressApi } from '@/api-endpoints/CartsApi';
// import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
// import { useUser } from '@/context/UserContext';

// interface AddressFormProps {
//     openModal: boolean;
//     handleClose: () => void;
//     editData: any;
// }

// export default function AddressForm({ openModal, handleClose, editData }: AddressFormProps) {

//     const [formData, setFormData] = useState({
//         address_line1: '',
//         address_line2: '',
//         address_type: '',
//         city: '',
//         state: '',
//         postal_code: '',
//         country: '',
//         landmark: '',
//         contact_number: '',
//         email_address: ''
//     });

//     // const [userId, setUserId] = useState<string | null>(null);
//     // const [userName, setUserName] = useState<string | null>(null);
//     const [loading, setLoading] = useState(false);
//     const queryClient = useQueryClient();
//     const { user } = useUser();
// const userId = user?.data?.id || null;
// const userName = user?.data?.name || null;

//     // useEffect(() => {

//     //     setUserName(user?.data?.name);
//     //     setUserId(user?.data?.id);
//     // }, []);

// //     useEffect(() => {
// //     setUserName(user?.data?.name || null);
// //     setUserId(user?.data?.id || null);
// // }, [user?.data?.id, user?.data?.name]);

//     useEffect(() => {
//         if (editData !== null) {
//             setFormData({
//                 address_line1: editData?.address_line1 || '',
//                 address_line2: editData?.address_line2 || '',
//                 address_type: editData?.address_type || '',
//                 city: editData?.city || '',
//                 state: editData?.state || '',
//                 postal_code: editData?.postal_code || '',
//                 country: editData?.country || '',
//                 landmark: editData?.landmark || '',
//                 contact_number: editData?.contact_number || '',
//                 email_address: editData?.email_address || ''
//             });
//         } else {
//             setFormData({
//                 address_line1: '',
//                 address_line2: '',
//                 address_type: '',
//                 city: '',
//                 state: '',
//                 postal_code: '',
//                 country: '',
//                 landmark: '',
//                 contact_number: '',
//                 email_address: ''
//             });
//         }

//     }, [editData]);

//     if (!openModal) return null;

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setLoading(true);

//         const payload = {
//             ...formData,
//             user: userId,
//             customer_name: userName,
//             ...(editData ? { updated_by: userName || 'user' } : { created_by: userName || 'user' })
//         };

//         try {
//             const response = editData
//                 ? await updateAddressApi(`${editData?.id}`, payload)
//                 : await postAddressCreateApi('', payload);

//             if (response) {
//                 queryClient.invalidateQueries(['getAddressData'] as InvalidateQueryFilters);
//                 handleClose();
//                 setLoading(false);
//             }
//         } catch (error) {
//             console.error(error);
//             setLoading(false);
//         }
//     };

//     const inputClass = "mt-1 block w-full p-1 border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500";

//     return (
//         <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[1001]">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-auto" onClick={(e) => e.stopPropagation()}>
//                 <div className="flex justify-between">
//                     <h2 className="text-xl font-semibold mb-4">{editData ? 'Edit' : 'Add'} Address</h2>
//                     <span onClick={handleClose} className="cursor-pointer">
//                         <X />
//                     </span>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-black">Address Line 1</label>
//                             <textarea name="address_line1" value={formData.address_line1} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">Address Line 2</label>
//                             <textarea name="address_line2" value={formData.address_line2} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">Email</label>
//                             <input name="email_address" value={formData.email_address} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">Contact</label>
//                             <input name="contact_number" value={formData.contact_number} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">Address Type</label>
//                             <input name="address_type" value={formData.address_type} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">City</label>
//                             <input name="city" value={formData.city} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">State</label>
//                             <input name="state" value={formData.state} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">Pin Code</label>
//                             <input type="number" name="postal_code" value={formData.postal_code} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">Country</label>
//                             <input name="country" value={formData.country} onChange={handleChange} required className={inputClass} />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-black">Landmark</label>
//                             <textarea name="landmark" value={formData.landmark} onChange={handleChange} required className={inputClass} />
//                         </div>
//                     </div>

//                     <div className="flex justify-end gap-4 pt-4">
//                         <button type="button" onClick={handleClose} className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-50">
//                             Cancel
//                         </button>
//                         <button type="submit" disabled={loading} className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 disabled:opacity-50 flex gap-2">
//                             Save {loading && <Loader className="animate-spin" size={20} />}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }



import { useState, useEffect } from 'react';
import { Loader, X } from 'lucide-react';
import { postAddressCreateApi, updateAddressApi } from '@/api-endpoints/CartsApi';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@/context/UserContext';

interface AddressFormProps {
    openModal: boolean;
    handleClose: () => void;
    editData: any;
}

export default function AddressForm({ openModal, handleClose, editData }: AddressFormProps) {

    const [formData, setFormData] = useState({
        address_line1: '',
        address_line2: '',
        address_type: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        landmark: '',
        contact_number: '',
        email_address: ''
    });

    const [loading, setLoading] = useState(false);
    const [pincodeLoading, setPincodeLoading] = useState(false);
    const queryClient = useQueryClient();
    const { user } = useUser();
    
    const userId = user?.data?.id || null;
    const userName = user?.data?.name || null;

    useEffect(() => {
        if (editData !== null) {
            setFormData({
                address_line1: editData?.address_line1 || '',
                address_line2: editData?.address_line2 || '',
                address_type: editData?.address_type || '',
                city: editData?.city || '',
                state: editData?.state || '',
                postal_code: editData?.postal_code || '',
                country: editData?.country || '',
                landmark: editData?.landmark || '',
                contact_number: editData?.contact_number || '',
                email_address: editData?.email_address || ''
            });
        } else {
            setFormData({
                address_line1: '',
                address_line2: '',
                address_type: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
                landmark: '',
                contact_number: '',
                email_address: ''
            });
        }
    }, [editData]);

    // 6 digit pincode enter pannadhum auto-fetch city, state, country
    useEffect(() => {
        const fetchPincodeDetails = async (pincode: string) => {
            try {
                setPincodeLoading(true);
                const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
                const data = await res.json();

                if (data[0]?.Status === 'Success') {
                    const postOffice = data[0].PostOffice[0];
                    setFormData((prev) => ({
                        ...prev,
                        city: postOffice.District,
                        state: postOffice.State,
                        country: postOffice.Country || 'India'
                    }));
                }
            } catch (error) {
                console.error("Pincode fetch error:", error);
            } finally {
                setPincodeLoading(false);
            }
        };

        if (formData.postal_code.length === 6) {
            fetchPincodeDetails(formData.postal_code);
        }
    }, [formData.postal_code]);

    if (!openModal) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            user: userId,
            customer_name: userName,
            ...(editData ? { updated_by: userName || 'user' } : { created_by: userName || 'user' })
        };

        try {
            const response = editData
                ? await updateAddressApi(`${editData?.id}`, payload)
                : await postAddressCreateApi('', payload);

            if (response) {
                queryClient.invalidateQueries(['getAddressData'] as InvalidateQueryFilters);
                handleClose();
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const inputClass = "mt-1 block w-full p-2 text-sm border rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 outline-none transition-all";
    const disabledInputClass = "mt-1 block w-full p-2 text-sm border rounded-md border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed shadow-sm";

    return (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[1001] p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center pb-2 mb-4 border-b border-gray-100">
                    <h2 className="text-xl font-semibold">{editData ? 'Edit' : 'Add'} Address</h2>
                    <span onClick={handleClose} className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                        <X />
                    </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-black">Email</label>
                            <input name="email_address" value={formData.email_address} onChange={handleChange} required className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black">Contact</label>
                            <input name="contact_number" value={formData.contact_number} onChange={handleChange} required className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black">Address Line 1</label>
                            <textarea name="address_line1" value={formData.address_line1} onChange={handleChange} required className={inputClass} rows={2} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black">Address Line 2</label>
                            <textarea name="address_line2" value={formData.address_line2} onChange={handleChange} required className={inputClass} rows={2} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black">Address Type</label>
                            <input name="address_type" value={formData.address_type} onChange={handleChange} required className={inputClass} placeholder="Home / Work" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black flex items-center justify-between">
                                Pin Code
                                {pincodeLoading && <Loader className="animate-spin text-orange-500" size={14} />}
                            </label>
                            <input 
                                type="text" 
                                name="postal_code" 
                                maxLength={6} 
                                value={formData.postal_code} 
                                onChange={handleChange} 
                                required 
                                className={inputClass} 
                                placeholder="Enter 6 digit pincode"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black">City</label>
                            <input name="city" value={formData.city} readOnly disabled className={disabledInputClass} placeholder="Auto-filled" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black">State</label>
                            <input name="state" value={formData.state} readOnly disabled className={disabledInputClass} placeholder="Auto-filled" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black">Country</label>
                            <input name="country" value={formData.country} readOnly disabled className={disabledInputClass} placeholder="Auto-filled" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black">Landmark</label>
                            <textarea name="landmark" value={formData.landmark} onChange={handleChange} required className={inputClass} rows={1} />
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                        <button type="button" onClick={handleClose} className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" disabled={loading} className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 disabled:opacity-50 flex items-center gap-2 transition-colors">
                            Save {loading && <Loader className="animate-spin" size={20} />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}