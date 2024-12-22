import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/utils/constants';

export function CallToActionButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => navigate(ROUTES.REGISTER)}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 
                 bg-[#28A745] hover:bg-[#218838] text-white rounded-xl text-lg font-medium 
                 shadow-lg shadow-[#28A745]/30 hover:shadow-xl hover:shadow-[#28A745]/40 
                 transform hover:-translate-y-0.5 transition-all duration-300"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>

      <button
        onClick={() => navigate(ROUTES.LOGIN)}
        className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
      >
        Already have an account? Sign In
      </button>

      <p className="text-sm text-gray-500 mt-4">
        Takes only 3 minutes to set up. Your capital is protected.
      </p>
    </div>
  );
}