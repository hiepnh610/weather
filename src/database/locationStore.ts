import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { LocationType } from 'types';

interface LocationStoreType extends LocationType {
  setName: (name: string) => void;
  setLat: (lat: number) => void;
  setLon: (lon: number) => void;
  setCountry: (country: string) => void;
}

const locationStore = create<LocationStoreType>()(
  devtools((set) => ({
    name: '',
    setName: (name) =>
      set((state) => ({
        ...state,
        name,
      })),
    lat: 0,
    setLat: (lat) =>
      set((state) => ({
        ...state,
        lat,
      })),
    lon: 0,
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
  }))
);

export default locationStore;
