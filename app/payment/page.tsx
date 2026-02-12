"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  const paymentDetails = {
    bank: "Bank BCA",
    accountNumber: "1234567890",
    accountName: "RE WEAR RI",
    amount: 370000,
    orderId: "RWR-2024-001234"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmPayment = () => {
    alert("Payment confirmation submitted! We'll verify your payment shortly.");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/checkout">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-lg font-semibold">Payment</h1>
        </div>
      </header>

      {/* Timer */}
      <div className="bg-accent text-white p-4 text-center">
        <p className="text-sm mb-1">Complete payment within</p>
        <p className="text-2xl font-bold font-mono">{formatTime(timeLeft)}</p>
      </div>

      {/* Payment Instructions */}
      <div className="bg-white p-4 mb-3">
        <h3 className="text-sm font-semibold mb-3">Payment Instructions</h3>
        <ol className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2">
            <span className="font-semibold text-accent">1.</span>
            <span>Transfer to the bank account below</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-accent">2.</span>
            <span>Use the exact amount including unique code</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-accent">3.</span>
            <span>Upload payment proof after transfer</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-accent">4.</span>
            <span>Wait for verification (max 1x24 hours)</span>
          </li>
        </ol>
      </div>

      {/* Bank Details */}
      <div className="bg-white p-4 mb-3">
        <h3 className="text-sm font-semibold mb-3">Transfer to</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-xs text-gray-500 mb-1">Bank</p>
              <p className="text-sm font-semibold">{paymentDetails.bank}</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">Account Number</p>
              <p className="text-base font-bold font-mono">{paymentDetails.accountNumber}</p>
            </div>
            <button
              onClick={() => copyToClipboard(paymentDetails.accountNumber)}
              className="ml-3 p-2 text-accent hover:bg-accent/10 rounded-lg transition"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-xs text-gray-500 mb-1">Account Name</p>
              <p className="text-sm font-semibold">{paymentDetails.accountName}</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border-2 border-accent">
            <div className="flex-1">
              <p className="text-xs text-accent mb-1">Total Payment</p>
              <p className="text-xl font-bold text-accent">
                Rp {paymentDetails.amount.toLocaleString('id-ID')}
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(paymentDetails.amount.toString())}
              className="ml-3 p-2 text-accent hover:bg-accent/10 rounded-lg transition"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Order ID */}
      <div className="bg-white p-4 mb-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 mb-1">Order ID</p>
            <p className="text-sm font-mono font-semibold">{paymentDetails.orderId}</p>
          </div>
          <button
            onClick={() => copyToClipboard(paymentDetails.orderId)}
            className="p-2 text-accent hover:bg-accent/10 rounded-lg transition"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Upload Proof */}
      <div className="bg-white p-4">
        <h3 className="text-sm font-semibold mb-3">Upload Payment Proof</h3>
        <label className="block">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-accent transition">
            <div className="text-gray-400 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">Click to upload payment proof</p>
            <p className="text-xs text-gray-400 mt-1">JPG, PNG (Max 5MB)</p>
          </div>
          <input type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 max-w-md mx-auto">
        <button 
          onClick={handleConfirmPayment}
          className="w-full bg-accent text-white py-3 rounded-full font-semibold text-sm"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
