import React from 'react';
import { UserCheck, Home, Navigation, Bell } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const values = [
    {
      icon: UserCheck,
      title: 'Sürücünü Özün Seç',
      description: 'Avtomobil modelinə, reytinqinə və çıxış saatına sərbəst baxaraq qərar ver.',
    },
    {
      icon: Home,
      title: 'Qapıdan-Qapıya',
      description: 'Avtovağzalda gözləmədən, təyin etdiyin ünvandan rahat minik və düşmə.',
    },
    {
      icon: Navigation,
      title: 'Canlı İzləmə',
      description: 'Həm sərnişin gedişini, həm də göndərdiyin bağlamanı xəritədə anbaan gör.',
    },
    {
      icon: Bell,
      title: 'Dəqiq Bildirişlər',
      description: 'Sürücü əvvəlki ünvandan çıxanda, 15 dəq və 5 dəq qalanda bildiriş al.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-30">
      <div className="bg-[#FCFCFC] rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/5 border border-neutral-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#DDF32C]/30 text-[#1E1E1E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-neutral-900 mb-1 tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
