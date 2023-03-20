import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { LocationType } from 'types';
interface LocationStoreType {
  currentLocation: LocationType;
  setCurrentLocation: (location: LocationType) => void;
}

const useLocationStore = create<LocationStoreType>()(
  devtools((set) => ({
    currentLocation: {
      country: '',
      lat: 0,
      lon: 0,
      name: '',
    },
    setCurrentLocation: (currentLocation: LocationType) =>
      set((state) => ({
        ...state,
        currentLocation,
      })),
  }))
);

export default useLocationStore;
