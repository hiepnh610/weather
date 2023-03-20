import React, { useState, ChangeEvent, useEffect } from 'react';
import { MdSearch, MdLocationOn, MdRefresh } from 'react-icons/md';
import { useQuery } from 'react-query';
import debounce from 'lodash/debounce';

import { fetchLocation } from 'services/getLocation';
import { LocationType } from 'types';
import useLocationStore from 'database/useLocationStore';

const SearchBoxComponent = () => {
  const [searchValue, setToSearchValue] = useState('');
  const { setCurrentLocation } = useLocationStore();

  const { refetch, data, isFetching } = useQuery(
    ['location', searchValue],
    () => fetchLocation(searchValue),
    { enabled: false }
  );

  const [isSuggestion, setIsSuggestion] = useState(!!data?.length);

  const onTyping = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setToSearchValue(e?.target?.value?.trim());
    setIsSuggestion(true);
  }, 300);

  const onLocationSelect = (location: LocationType): void => {
    setIsSuggestion(false);
    setCurrentLocation(location);
  };

  useEffect(() => {
    if (searchValue) {
      refetch();
    }
  }, [searchValue, refetch]);

  return (
    <div className="bg-dark-800 rounded-4xl">
      <div className="relative">
        {isFetching ? (
          <div className="absolute top-1/2 left-6 -translate-y-1/2">
            <MdRefresh className="text-white text-xl leading-5 animate-spin" />
          </div>
        ) : (
          <MdSearch className="text-white absolute top-1/2 left-6 text-xl -translate-y-1/2 leading-5" />
        )}

        <input
          type="text"
          className="bg-dark-800 border-none py-4 pr-8 pl-14 rounded-full w-full outline-none text-white text-sm"
          placeholder="Type your location to search"
          onChange={onTyping}
        />
      </div>

      {!!data?.length && isSuggestion && (
        <div className="bg-dark-800 rounded-b-4xl w-full text-white text-sm px-3 pb-4">
          <nav
            className="overflow-y-scroll overflow-x-hidden pr-2"
            style={{ maxHeight: 400 }}
          >
            <ul>
              {data?.map((location: LocationType) => (
                <li key={location.country}>
                  <button
                    type="button"
                    className="flex text-left transition ease-in-out duration-300 py-2 px-4 w-full items-center rounded-lg hover:bg-dark-900"
                    onClick={() => onLocationSelect(location)}
                  >
                    <MdLocationOn className="leading-4 mr-3" />
                    {location.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SearchBoxComponent;
