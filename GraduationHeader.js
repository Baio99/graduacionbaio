import React from 'react';
import { GraduationCap, Award, PartyPopper } from 'lucide-react';

const GraduationHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-6">
      {/* Contenedor principal con animación de entrada */}
      <div className="relative animate-fade-in-down">
        {/* Birrete principal */}
        <GraduationCap 
          size={120} 
          className="text-[#B0855B] animate-float"
          strokeWidth={1.5}
        />
        
        {/* Decoraciones laterales */}
        <PartyPopper 
          size={40} 
          className="absolute -left-8 top-0 text-[#FFD700] animate-bounce-slow"
          strokeWidth={1.5}
        />
        <Award 
          size={40} 
          className="absolute -right-8 top-0 text-[#FFD700] animate-bounce-delayed"
          strokeWidth={1.5}
        />
      </div>

      {/* Título con animación de entrada */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-playfair text-[#B0855B] font-bold animate-fade-in">
          ¡Mi Graduación!
        </h1>
        <p className="text-xl text-[#2c3e50] animate-fade-in-up">
          ¡Has recibido una invitación especial de Adrian!
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-8px) rotate(-15deg); }
        }

        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-8px) rotate(15deg); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }

        .animate-bounce-delayed {
          animation: bounce-delayed 2.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-down {
          opacity: 0;
          animation: fadeInDown 1s ease-out forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GraduationHeader;