"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error caught by error boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-red-950 py-6 px-4 text-center">
          <h1 className="text-2xl font-bold text-white">141 Main Grill</h1>
        </div>
        
        <div className="p-8 text-center">
          <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <svg 
              className="w-12 h-12 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong!</h2>
          <p className="text-gray-600 mb-4">
            We encountered an error: <strong>{error.message}</strong>
          </p>
          
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full bg-red-950 hover:bg-red-800 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="block w-full border border-red-950 text-red-950 hover:bg-red-50 font-medium py-3 px-4 rounded-lg transition duration-300"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-100 py-4 px-4 text-center">
          <p className="text-sm text-gray-600">
            Need immediate assistance? Call us at{" "}
            <a href="tel:+14135667890" className="text-red-950 hover:underline">
              (413) 566-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}