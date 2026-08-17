
'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { auth, googleProvider } from '../../../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useVendor } from '@/context/VendorContext';
import url from '@/api-endpoints/ApiUrls';
import { getCartApi } from '@/api-endpoints/CartsApi';
import { useRouter } from 'next/navigation';
import { postSendSmsOtpUserApi, postVerifySmsOtpApi, getCheckEmailApi, postSendOtpAPi, postSendOtpVerifyAPi, updateUserAPi } from '@/api-endpoints/authendication';
import toast from 'react-hot-toast';

const LoginClient = () => {
    const { vendorId } = useVendor();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState<'email' | 'otp'>('email');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [userId, setUserId] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '', mobile: '', otp: '' });

    // Forgot Password States
    const [forgotEmail, setForgotEmail] = useState('');
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [forgotOtp, setForgotOtp] = useState(Array(6).fill(''));
    const [timer, setTimer] = useState(60);
    const [showPasswordReset, setShowPasswordReset] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [forgotToken, setForgotToken] = useState('');
    const [forgotUserId, setForgotUserId] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailLoader, setEmailLoader] = useState(false);
    const [otpErrorMessage, setOtpErrorMessage] = useState('');
    const [otpLoader, setOtpLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordLoader, setPasswordLoader] = useState(false);

    useEffect(() => {
        const storedId = localStorage.getItem('forgetuserId');
        setForgotUserId(storedId);
    }, []);

    useEffect(() => {
        if (showOtpModal && timer > 0) {
            const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
            return () => clearInterval(countdown);
        }
    }, [showOtpModal, timer]);

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');
        setEmailLoader(true);
        try {
            const updateApi = await getCheckEmailApi(`?email=${forgotEmail}&vendor_id=${vendorId}`);

            if (updateApi?.data?.id) {
                const sendOtp = await postSendOtpAPi({ email: updateApi?.data?.email, vendor_id: vendorId });

                if (sendOtp) {
                    setEmailLoader(false);
                    setForgotToken(sendOtp?.data?.token);
                    setShowEmailModal(false);
                    setShowOtpModal(true);
                    setTimer(60);
                    setForgotOtp(Array(6).fill(''));
                    setTimeout(() => inputsRef.current[0]?.focus(), 100);
                }
            } else {
                setErrorMessage("You're not a user, please create an account.");
                setEmailLoader(false);
            }
        } catch (error) {
            setErrorMessage("You're not a user, please create an account.");
            setEmailLoader(false);
        }
    };

    const sendOtpToEmail = async () => {
        setErrorMessage('');
        try {
            const updateApi = await getCheckEmailApi(`?email=${forgotEmail}&vendor_id=${vendorId}`);
            if (updateApi?.data?.id) {
                const sendOtp = await postSendOtpAPi({ email: updateApi?.data?.email, vendor_id: vendorId });
                if (sendOtp) {
                    setForgotToken(sendOtp?.data?.token);
                    setTimer(60);
                    setForgotOtp(Array(6).fill(''));
                    setTimeout(() => inputsRef.current[0]?.focus(), 100);
                }
            } else {
                setErrorMessage("You're not a registered user. Please create an account.");
            }
        } catch (error: any) {
            console.log(error, "check email error");
            setErrorMessage("Failed to send OTP. Please try again.");
        }
    };

    const handleOtpChange = (val: string, idx: number) => {
        if (!/^\d*$/.test(val)) return;
        const newOtp = [...forgotOtp];
        newOtp[idx] = val;
        setForgotOtp(newOtp);
        if (val && idx < 5) inputsRef.current[idx + 1]?.focus();
    };

    const handleBackspace = (e: React.KeyboardEvent, idx: number) => {
        if (e.key === 'Backspace' && !forgotOtp[idx] && idx > 0) {
            inputsRef.current[idx - 1]?.focus();
        }
    };

    const handleOtpSubmit = async () => {
        setOtpLoader(true);
        setOtpErrorMessage('');
        const finalOtp = forgotOtp.join('');
        if (finalOtp.length === 6) {
            try {
                const updateApi = await postSendOtpVerifyAPi({
                    token: forgotToken,
                    otp: finalOtp,
                    vendor_id: vendorId,
                    login_type: 'user',
                });

                if (updateApi?.data?.user_id) {
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('forgetuserId', updateApi?.data?.user_id);
                        setForgotUserId(updateApi?.data?.user_id);
                        setOtpLoader(false);
                        setShowOtpModal(false);
                        setShowPasswordReset(true);
                    }
                }
            } catch (error: any) {
                const errMsg = error?.response?.data?.message || 'Failed to verify OTP. Please try again.';
                setOtpErrorMessage(errMsg);
                setOtpLoader(false);
            }
        } else {
            setOtpLoader(false);
            setOtpErrorMessage('Please enter a valid 6-digit OTP.');
        }
    };

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        setPasswordLoader(true);
        try {
            const updateApi = await updateUserAPi(`/${forgotUserId}`, {
                password: newPassword,
                updated_by: "user",
                role: 3,
                vendor: vendorId,
            });

            if (updateApi) {
                toast.success('Password updated successfully');
                setShowPasswordReset(false);
                setForgotEmail('');
                setNewPassword('');
                setConfirmPassword('');
                setActiveTab('email');
            }
        } catch (error) {
            console.error('Password reset failed:', error);
            toast.error('Failed to reset password');
        } finally {
            setPasswordLoader(false);
        }
    };

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) router.push('/profile');
        else setUserId(storedUserId);
    }, [router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = {
            email: formData.email ? '' : 'Email is required',
            password: formData.password ? '' : 'Password is required',
            mobile: '',
            otp: '',
        };
        setErrors(validationErrors);

        const hasError = Object.values(validationErrors).some((msg) => msg !== '');
        if (hasError) return;

        try {
            setLoading(true);
            const response = await axios.post(url.signIn, {
                ...formData,
                vendor_id: vendorId,
            });

            if (response?.data?.user_id) {
                localStorage.setItem('userId', response.data.user_id);

                const updateApi = await getCartApi(`user/${response.data.user_id}`);
                if (updateApi?.data?.length > 0) {
                    localStorage.setItem('cartId', updateApi.data[0].id);
                }

                router.push('/');
                window.location.reload();
            }
        } catch (err: any) {
            setError(err?.response?.data?.error || 'Something went wrong, please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // ✅ OTP LOGIN FLOW
    const handleSendOtp = async () => {
        setLoading(true);
        try {
            const res = await postSendSmsOtpUserApi({
                contact_number: mobile,
                vendor_id: vendorId,
            });
            if (res?.data?.token) {
                setOtpSent(true);
                setToken(res.data.token);
                setLoading(false);

            }
        } catch (err: any) {
            setLoading(false);
            toast.error(err?.response?.data?.message || err?.response?.data?.error || 'Failed to send OTP')
            const errorMessage = err?.response?.data?.message || err?.response?.data?.error || 'Failed to send OTP';
            setError(errorMessage);

            if (errorMessage === "No account found with this phone number. Please try Google login or sign up.") {
                setTimeout(() => {
                    handleGoogleLogin();
                }, 3000);
            }
        }
    };

    const handleVerifyOtp = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await postVerifySmsOtpApi({
                otp: otp,
                token: token,
                login_type: "user",
                vendor_id: vendorId,
            });

            const userId = res?.data?.user_id;
            if (userId) {
                localStorage.setItem('userId', userId);
                const cartRes = await getCartApi(`user/${userId}`);
                if (cartRes) {
                    localStorage.setItem('cartId', cartRes.data[0]?.id);
                    setLoading(false);
                    window.location.reload();
                }
            }
            // if (response?.data?.user_id) {
            //   toast.success('Login successful!');
            //   localStorage.setItem('userId', response.data.user_id);

            //   const cartRes = await getCartApi(`user/${response.data.user_id}`);
            //   localStorage.setItem('cartId', cartRes?.data[0]?.id);

            //   handleClose();
            //   window.location.reload();
            // }
        } catch (err: any) {
            setLoading(false);
            setError(err?.response?.data?.error || 'Invalid OTP');
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError('');

        let isPopupResolved = false;

        // Workaround for Firebase delay: reset loading when window regains focus
        const handleFocus = () => {
            window.removeEventListener('focus', handleFocus);
            setTimeout(() => {
                if (!isPopupResolved) {
                    setLoading(false);
                }
            }, 1500);
        };
        window.addEventListener('focus', handleFocus);

        try {
            const result = await signInWithPopup(auth, googleProvider);
            isPopupResolved = true;
            window.removeEventListener('focus', handleFocus);
            const idToken = await result.user.getIdToken();

            const response: any = await axios.post(url.googleLogin, {
                id_token: idToken,
                vendor_id: vendorId,
            });

            if (response) {
                const uid = response?.data?.user_id || response?.data?.user?.id || response?.data?.id;
                if (uid) {
                    localStorage.setItem('userId', String(uid));
                }
                if (response?.data?.name || response?.data?.user?.name) {
                    localStorage.setItem('userName', response?.data?.name || response?.data?.user?.name);
                }
                if (response?.data?.email || response?.data?.user?.email) {
                    localStorage.setItem('email', response?.data?.email || response?.data?.user?.email);
                }

                if (uid) {
                    try {
                        const updateApi = await getCartApi(`user/${uid}`);
                        if (updateApi?.data?.[0]?.id) {
                            localStorage.setItem('cartId', updateApi.data[0].id);
                        }
                    } catch (cartErr) {
                        console.error("Error syncing cart on google login:", cartErr);
                    }
                }

                window.location.reload();
            }
        } catch (err: any) {
            console.error("Google login error:", err);
            if (err?.code === 'auth/popup-closed-by-user' || err?.code === 'auth/cancelled-popup-request') {
                // Silently handle popup close without showing error to the user
                setError('');
            } else {
                setError(err?.response?.data?.error || err?.response?.data?.message || err?.message || 'Failed to sign in with Google');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                    {/* Tabs */}
                    <div className="flex space-x-4 mb-6">
                        <button
                            onClick={() => setActiveTab('email')}
                            className={`px-4 py-2 font-medium border-b-2 transition ${activeTab === 'email'
                                ? 'border-orange-600 text-orange-600'
                                : 'text-gray-600 border-transparent'
                                }`}
                        >
                            Email Login
                        </button>
                        <button
                            onClick={() => setActiveTab('otp')}
                            className={`px-4 py-2 font-medium border-b-2 transition ${activeTab === 'otp'
                                ? 'border-orange-600 text-orange-600'
                                : 'text-gray-600 border-transparent'
                                }`}
                        >
                            OTP Login
                        </button>
                    </div>

                    {activeTab === 'email' && (
                        <form onSubmit={handleEmailLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
                                <div className="flex justify-end mt-2">
                                    <button type="button" onClick={() => setShowEmailModal(true)} className="text-sm text-orange-600 hover:underline">Forgot Password?</button>
                                </div>
                            </div>
                            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>
                    )}

                    {activeTab === 'otp' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Mobile Number</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={mobile}
                                    onChange={(e) => {
                                        setMobile(e.target.value);
                                        setErrors({ ...errors, mobile: '' });
                                    }}
                                    className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter mobile number"
                                />
                                {errors.mobile && <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>}
                            </div>

                            {!otpSent ? (
                                <button
                                    onClick={handleSendOtp}
                                    disabled={loading}
                                    className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
                                >
                                    {loading ? 'Sending OTP...' : 'Send OTP'}
                                </button>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium">Enter OTP</label>
                                        <input
                                            required
                                            type="text"
                                            name="otp"
                                            value={otp}
                                            onChange={(e) => {
                                                setOtp(e.target.value);
                                                setErrors({ ...errors, otp: '' });
                                            }}
                                            className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none ${errors.otp ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Enter the OTP"
                                        />
                                        {errors.otp && <p className="text-sm text-red-500 mt-1">{errors.otp}</p>}
                                    </div>
                                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}
                                    <button
                                        onClick={handleVerifyOtp}
                                        disabled={loading}
                                        className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
                                    >
                                        {loading ? 'Verifying...' : 'Verify & Login'}
                                    </button>
                                </>
                            )}
                        </div>
                    )}

                    {/* Google Login Section */}
                    <div className="mt-6 flex items-center justify-center space-x-2">
                        <div className="h-px bg-gray-300 w-full"></div>
                        <span className="text-gray-400 text-sm">OR</span>
                        <div className="h-px bg-gray-300 w-full"></div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            type="button"
                            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50 transition"
                        >
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                            Sign in with Google
                        </button>
                    </div>

                    <p className="text-sm text-center mt-6">
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className="text-orange-600 hover:underline">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>

            {/* Forgot Password - Email Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative mx-4">
                        <button onClick={() => setShowEmailModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">X</button>
                        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
                        <form onSubmit={handleEmailSubmit}>
                            <label className="block text-sm font-medium mb-1">Enter your registered email</label>
                            <input type="email" required value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300" />
                            {errorMessage && <p className="text-sm text-red-500 mt-1">{errorMessage}</p>}
                            <button type="submit" disabled={emailLoader} className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
                                {emailLoader ? 'Sending...' : 'Send OTP'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Forgot Password - OTP Modal */}
            {showOtpModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative mx-4">
                        <button onClick={() => setShowOtpModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">X</button>
                        <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
                        <p className="text-sm text-gray-600 mb-4">OTP sent to {forgotEmail}</p>
                        <div className="flex space-x-2 justify-center mb-4">
                            {forgotOtp.map((digit, idx) => (
                                <input key={idx} type="text" maxLength={1} value={digit}
                                    ref={(el) => { inputsRef.current[idx] = el; }}
                                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                                    onKeyDown={(e) => handleBackspace(e, idx)}
                                    className="w-10 h-12 text-center border rounded-md text-lg focus:outline-none border-gray-300"
                                />
                            ))}
                        </div>
                        {otpErrorMessage && <p className="text-sm text-red-500 mt-1 text-center">{otpErrorMessage}</p>}
                        <div className="text-center text-sm text-gray-500 mb-4">
                            {timer > 0 ? `Resend OTP in ${timer}s` : <button type="button" onClick={sendOtpToEmail} className="text-orange-600 hover:underline">Resend OTP</button>}
                        </div>
                        <button onClick={handleOtpSubmit} disabled={otpLoader || forgotOtp.join('').length !== 6} className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition disabled:opacity-50">
                            {otpLoader ? 'Verifying...' : 'Verify OTP'}
                        </button>
                    </div>
                </div>
            )}

            {/* Forgot Password - Reset Modal */}
            {showPasswordReset && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative mx-4">
                        <button onClick={() => setShowPasswordReset(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">X</button>
                        <h2 className="text-xl font-semibold mb-4">Set New Password</h2>
                        <form onSubmit={handlePasswordReset} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">New Password</label>
                                <input type={showPassword ? 'text' : 'password'} required value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Confirm Password</label>
                                <input type={showConfirmPassword ? 'text' : 'password'} required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none border-gray-300" />
                            </div>
                            <button type="submit" disabled={passwordLoader} className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
                                {passwordLoader ? 'Updating...' : 'Update Password'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginClient;
