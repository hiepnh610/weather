import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface LocationStoreType {
  searchValue: string;
  setToSearchValue: (q: string) => void;
}

const useLocationStore = create<LocationStoreType>()(
  devtools((set) => ({
    searchValue: '',
    setToSearchValue: (searchValue) =>
      set((state) => ({
        ...state,
        searchValue,
      })),
  }))
);

export default useLocationStore;
