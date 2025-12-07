"use client";

import { useState, useEffect } from 'react';

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // check if user already verified
    const ok = window.localStorage.getItem('ageVerified18');
    if (!ok) {
      setShow(true);
    }
  }, []);

  const handleConfirm = () => {
    window.localStorage.setItem('ageVerified18', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Age Verification</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You must be 18 years or older to enter this site.
        </p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleConfirm}
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            I am 18 or older
          </button>
          <a
            href="https://www.google.com"
            className="text-center text-sm text-gray-500 underline"
          >
            I am under 18
          </a>
        </div>
      </div>
    </div>
  );
}