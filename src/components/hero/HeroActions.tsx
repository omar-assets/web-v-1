import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/utils/constants';

export function HeroActions() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
      <button
        onClick={() => navigate(ROUTES.REGISTER)}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 
                 bg-[#28A745] hover:bg-[#218838] text-white rounded-xl text-lg font-medium 
                 shadow-lg shadow-[#28A745]/30 hover:shadow-xl hover:shadow-[#28A745]/40 
                 transform hover:-translate-y-0.5 transition-all duration-300"
        data-tracking="cta-primary"
      >
        Start Investing Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
      
      <button
        onClick={() => navigate(ROUTES.MARKETPLACE)}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 
                 border-2 border-[#28A745] text-[#28A745] hover:border-[#218838] hover:text-[#218838] 
                 rounded-xl text-lg font-medium hover:bg-[#28A745]/5 transition-colors"
        data-tracking="cta-secondary"
      >
        View Opportunities
      </button>
    </div>
  );
}