import React, { useState } from 'react';
import { SAMPLE_TRIPS } from '../data/uyolData';
import { TripItem, SeatItem } from '../types';
import { Check, Star, User, Users, Shield, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface PassengerSectionProps {
  onOpenTicket: () => void;
  onOpenDownload: () => void;
}

export const PassengerSection: React.FC<PassengerSectionProps> = ({ onOpenTicket, onOpenDownload }) => {
  const [selectedTrip, setSelectedTrip] = useState<TripItem>(SAMPLE_TRIPS[0]);
  const [selectedSeatId, setSelectedSeatId] = useState<number | null>(4);

  const handleSeatClick = (seat: SeatItem) => {
    if (seat.status === 'male' || seat.status === 'female') {
      alert(`Bu yer artıq ${seat.status === 'male' ? 'Kişi' : 'Qadın'} sərnişin tərəfindən bron edilib.`);
      return;
    }
    setSelectedSeatId(seat.id);
  };

  return (
    <section id="sernisinler" className="py-20 md:py-28 bg-[#FCFCFC] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
              Sərnişinlər Üçün
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight mb-3">
              Yolunu və yerini tam özün seç
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Təsadüfə yer yoxdur. Sürücünün profilini, maşın növünü, çıxış saatını və hətta yanındakı oturacağın kim tərəfindən tutulduğunu əvvəlcədən bilirsən.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 font-medium hidden sm:inline">
              Qeydiyyatsız baxış mümkündür
            </span>
            <button
              onClick={onOpenDownload}
              className="px-5 py-2.5 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Tətbiqdə axtar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Trips Selector & Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                Gedişlər (Reyslər)
              </span>
              <span className="text-xs text-neutral-400">
                İstiqamət üzrə nümunələr
              </span>
            </div>

            {/* Trip Cards List */}
            {SAMPLE_TRIPS.map((trip) => {
              const isSelected = selectedTrip.id === trip.id;
              return (
                <div
                  key={trip.id}
                  onClick={() => setSelectedTrip(trip)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 ${
                    isSelected
                      ? 'bg-white border-[#1E1E1E] shadow-md ring-1 ring-[#1E1E1E]'
                      : 'bg-[#F2F2F7] border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {/* Top: Route + Time Chevron */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-base font-bold text-neutral-900">{trip.departureTime}</div>
                      <div className="text-xs text-neutral-500">{trip.from}</div>
                    </div>

                    {/* Chevron sequence: Bakı >>>>> Qəbələ */}
                    <div className="flex flex-col items-center px-4">
                      <span className="text-[10px] text-neutral-400 font-mono mb-0.5">{trip.duration}</span>
                      <div className="flex items-center text-[#3DB52F] font-black text-xs tracking-tighter">
                        <span>&gt;</span>
                        <span>&gt;</span>
                        <span>&gt;</span>
                        <span>&gt;</span>
                        <span>&gt;</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-bold text-neutral-900">{trip.arrivalTime}</div>
                      <div className="text-xs text-neutral-500">{trip.to}</div>
                    </div>
                  </div>

                  {/* Middle: Driver & Car */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-200/80 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-700 text-xs">
                        {trip.driverName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900 flex items-center gap-1.5">
                          <span>{trip.driverName}</span>
                          <span className="inline-flex items-center text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded font-bold">
                            ★ {trip.rating}
                          </span>
                        </div>
                        <div className="text-neutral-500 text-[11px]">
                          {trip.carModel} · <span className="font-mono text-neutral-600">{trip.carPlate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price Badge on soft lime */}
                    <div className="text-right">
                      <div className="inline-block bg-[#F4FBD0] text-[#1E1E1E] px-3 py-1 rounded-lg font-bold text-sm">
                        {trip.price} ₼
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Tags */}
                  <div className="flex items-center justify-between pt-3 mt-1">
                    <div className="flex items-center gap-2">
                      {trip.isDoorToDoor && (
                        <span className="text-[10px] font-semibold bg-[#DDF32C] text-[#1E1E1E] px-2.5 py-0.5 rounded-full">
                          Qapıdan-Qapıya
                        </span>
                      )}
                      {trip.availableSeats === 1 ? (
                        <span className="text-[10px] font-semibold bg-[#FEE2E2] text-[#DC2626] px-2.5 py-0.5 rounded-full">
                          Yalnız 1 yer qalıb
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium bg-neutral-200/70 text-neutral-700 px-2.5 py-0.5 rounded-full">
                          {trip.availableSeats} boş yer
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-semibold text-neutral-900 flex items-center gap-1">
                      {isSelected ? 'Seçildi' : 'Seçmək üçün toxun'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (5 cols): Interactive Salon Map (Yer Seçimi) & Perforated Ticket Teaser */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1E1E1E] text-white rounded-3xl p-6 shadow-xl border border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#DDF32C] block">
                    İnteraktiv Salon
                  </span>
                  <h3 className="text-lg font-bold text-white">Yer Seçimi</h3>
                </div>
                <span className="text-xs text-neutral-400">
                  {selectedTrip.carModel.split(' ')[0]}
                </span>
              </div>

              {/* Legend: Kişi / Qadın / Boş yer / Seçilmiş */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 text-[10px] text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-blue-500/80" />
                  <span>Kişi yeri</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-pink-500/80" />
                  <span>Qadın yeri</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#2A2A2A] border border-white/20" />
                  <span>Boş yer</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#DDF32C]" />
                  <span>Sizin yeriniz</span>
                </div>
              </div>

              {/* Car Cabin Mockup */}
              <div className="bg-[#262626] rounded-2xl p-4 border border-white/5 max-w-[280px] mx-auto space-y-3">
                {/* Steering Wheel / Driver Area */}
                <div className="flex justify-between items-center pb-2 border-b border-white/10 text-[10px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-8 h-8 rounded-lg bg-neutral-700/60 flex items-center justify-center font-bold text-white text-xs">
                      S
                    </div>
                    <span>Sürücü</span>
                  </div>
                  <span className="text-[9px] text-neutral-500">Ön tərəf</span>
                </div>

                {/* Seat Rows */}
                <div className="space-y-3 py-2">
                  <div className="flex justify-around items-center">
                    {selectedTrip.seats.slice(0, 2).map((seat) => renderSeatButton(seat))}
                  </div>
                  <div className="flex justify-around items-center">
                    {selectedTrip.seats.slice(2, 4).map((seat) => renderSeatButton(seat))}
                  </div>
                  {selectedTrip.seats.length > 4 && (
                    <div className="flex justify-around items-center">
                      {selectedTrip.seats.slice(4).map((seat) => renderSeatButton(seat))}
                    </div>
                  )}
                </div>
              </div>

              {/* Seat Details & Checkout Button */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Seçilmiş yer:</span>
                  <span className="font-bold text-[#DDF32C]">
                    № {selectedSeatId ? `0${selectedSeatId}` : 'Seçilməyib'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Gediş haqqı:</span>
                  <span className="font-bold text-white text-sm">
                    {selectedTrip.price} ₼
                  </span>
                </div>

                <button
                  onClick={onOpenTicket}
                  className="w-full py-3 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Bilet kartını nəzərdən keçir</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function renderSeatButton(seat: SeatItem) {
    const isSelected = selectedSeatId === seat.id;
    let bgClass = 'bg-[#2A2A2A] text-white hover:border-[#DDF32C] border border-white/20';

    if (isSelected) {
      bgClass = 'bg-[#DDF32C] text-[#1E1E1E] font-bold ring-2 ring-[#DDF32C]';
    } else if (seat.status === 'male') {
      bgClass = 'bg-blue-600/80 text-white cursor-not-allowed';
    } else if (seat.status === 'female') {
      bgClass = 'bg-pink-600/80 text-white cursor-not-allowed';
    }

    return (
      <button
        key={seat.id}
        onClick={() => handleSeatClick(seat)}
        className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center text-xs transition-all ${bgClass}`}
        title={`Oturacaq № ${seat.label}`}
      >
        <User className="w-4 h-4 mb-0.5" />
        <span className="text-[10px] font-mono leading-none">{seat.label}</span>
      </button>
    );
  }
};
