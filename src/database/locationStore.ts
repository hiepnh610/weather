import { create } from 'zustand';
import { LocationType } from '../types';

interface LocationStoreType extends LocationType {
  setName: (name: string) => void;
  setLat: (lat: number) => void;
  setLon: (lon: number) => void;
  setCountry: (country: string) => void;
}

const locationStore = create<LocationStoreType>((set) => ({
  name: '',
  setName: (name) =>
    set((state) => ({
      ...state,
      name,
    })),
  lat: null,
  setLat: (lat) =>
    set((state) => ({
      ...state,
      lat,
    })),
  lon: null,
  setLon: (lon) =>
    set((state) => ({
      ...state,
      lon,
    })),
  country: '',
  setCountry: (country) =>
    set((state) => ({
      ...state,
      country,
    })),
}));

export default locationStore;
