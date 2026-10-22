'use client';

import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, Lock, Mail, Phone, X } from "lucide-react";
import { getCartApi } from "@/api-endpoints/CartsApi";
import Link from "next/link";
import { postSendSmsOtpUserApi, postVerifySmsOtpApi } from "@/api-endpoints/authendication";
import { baseUrl } from "@/api-endpoints/ApiUrls";
import url from "@/api-endpoints/ApiUrls";
import { handlePostLoginCartSync } from "@/lib/cartUtils";
import { auth, googleProvider } from "../../lib/firebase";
import { signInWithPopup } from "firebase/auth";

function LoginModal({ open, handleClose, vendorId, onSuccess }: any) {

  const [activeTab, setActiveTab] = useState<'email' | 'otp'>('email');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Email and Password are required.");
      return;
    }

    try {
      setLoading(true);
      setError('');
      const response: any = await axios.post(
        `${baseUrl}/user_login/`,
        { ...formData, vendor_id: vendorId || 87 }
      );

      if (response) {
        const uid = response?.data?.user_id;
        if (typeof window !== 'undefined' && uid) {
          localStorage.setItem('userId', uid);
          if (response?.data?.name) {
            localStorage.setItem('userName', response?.data?.name);
          }
        }

        // Sync local storage guest cart items to backend API and clear local storage
        await handlePostLoginCartSync(uid, vendorId || 87, response?.data?.name);

        handleClose();
        if (onSuccess) {
          onSuccess();
        }
        window.location.reload();
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || err?.response?.data?.message || 'Something went wrong, please try again later');
    } finally {
      setLoading(false);
    }
  };
  const handleSendOtp = async () => {
    setError('');
    if (!mobile) return setError('Mobile number is required');
    setLoading(true);
    try {
      const res = await postSendSmsOtpUserApi({ contact_number: mobile, vendor_id: vendorId || 87 });
      if (res?.data?.token) {
        setOtpSent(true);
        setToken(res.data.token);
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || err?.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await postVerifySmsOtpApi({
        otp,
        token,
        login_type: "user",
        vendor_id: vendorId || 87,
      });

      const userId = res?.data?.user_id;
      if (userId) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('userId', userId);
          if (res?.data?.name) {
            localStorage.setItem('userName', res?.data?.name);
          }
        }

        // Sync local storage guest cart items to backend API and clear local storage
        await handlePostLoginCartSync(userId, vendorId || 87, res?.data?.name);

        handleClose();
        if (onSuccess) {
          onSuccess();
        }
        window.location.reload();
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || err?.response?.data?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
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
        vendor_id: vendorId || 87,
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
          await handlePostLoginCartSync(uid, vendorId || 87, response?.data?.name || response?.data?.user?.name);
        }

        handleClose();
        if (onSuccess) {
          onSuccess();
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-[95%] max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sign in to your account</h2>
          <X onClick={handleClose} className="text-gray-500 hover:text-red-500 cursor-pointer" />
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('email')}
            className={`px-4 py-2 font-medium border-b-2 ${activeTab === 'email' ? 'border-orange-500 text-orange-500' : 'text-gray-600 border-transparent'}`}
          >
            Email Login
          </button>
          <button
            onClick={() => setActiveTab('otp')}
            className={`px-4 py-2 font-medium border-b-2 ${activeTab === 'otp' ? 'border-orange-500 text-orange-500' : 'text-gray-600 border-transparent'}`}
          >
            OTP Login
          </button>
        </div>

        {activeTab === 'email' ? (
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  type={passwordShow ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="pl-10 pr-10 py-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
                />
                {passwordShow ? (
                  <EyeOff onClick={() => setPasswordShow(false)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                ) : (
                  <Eye onClick={() => setPasswordShow(true)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                )}
              </div>
            </div>

            {/* Forgot password link */}
            <div className="text-right text-sm">
              <Link href="/auth/forgot-password" className="text-orange-500 hover:underline">
                Forgot your password?
              </Link>
            </div>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
            >
              Sign in
            </button>

            {/* Bottom link */}
            <p className="text-sm text-gray-600 text-center">
              Don’t have an account?{' '}
              <Link href="/signup" className="text-orange-500 font-medium hover:underline">
                Create one
              </Link>
            </p>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {!otpSent ? (
              <button
                onClick={handleSendOtp}
                disabled={loading}
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700 transition"
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleVerifyOtp}
                  disabled={loading}
                  className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
                >
                  {loading ? 'Verifying...' : 'Verify & Login'}
                </button>
              </>
            )}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </div>
        )}

        {/* Google Login Section */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="h-px bg-gray-300 w-full"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;

