export interface TripItem {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  driverName: string;
  driverAvatar: string;
  carModel: string;
  carPlate: string;
  rating: number;
  price: number;
  availableSeats: number;
  isDoorToDoor: boolean;
  seats: SeatItem[];
}

export interface SeatItem {
  id: number;
  row: number;
  col: number;
  status: 'empty' | 'male' | 'female' | 'selected';
  label: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppScreen {
  id: string;
  title: string;
  tag: string;
  description: string;
  appType: 'user' | 'driver';
  category: string;
}

export interface ParcelCheckpoint {
  id: string;
  title: string;
  time?: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
}
