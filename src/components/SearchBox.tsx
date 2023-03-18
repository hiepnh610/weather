import React, { useState, ChangeEvent } from 'react';
import { MdSearch, MdLocationOn, MdRefresh } from 'react-icons/md';
import { useQuery } from 'react-query';
import debounce from 'lodash/debounce';

import { fetchLocation } from '../services/getLocation';

const fakeData = [
  'Hanoi',
  'Saigon',
  'Berlin',
  'Helsinki',
  'Moscow',
  'Paris',
  'Tokyo',
  'Nairobi',
  'Oslo',
  'Denver',
  'Rio',
  'Norway',
  'San Francisco',
  'Beijing',
  'Seattle',
  'Seoul',
];

interface LocationType {
  country: string;
  lat: number;
  lon: number;
  name: string;
}

const SearchBoxComponent = () => {
  const [searchValue, setToSearchValue] = useState('');

  const { isLoading, isError, data, error, refetch } = useQuery(
    ['location'],
    () => fetchLocation(searchValue),
    { enabled: !!searchValue }
  );

  const onTyping = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setToSearchValue(e?.target?.value);
  }, 300);

  console.log('data', data);

  return (
    <div className="bg-dark-800 rounded-4xl">
      <div className="relative">
        {isLoading ? (
          <div className="absolute top-1/2 left-6 -translate-y-1/2">
            <MdRefresh className="text-white text-xl leading-5 animate-spin" />
          </div>
        ) : (
          <MdSearch className="text-white absolute top-1/2 left-6 text-xl -translate-y-1/2 leading-5" />
        )}

        <input
          type="text"
          className="bg-dark-800 border-none py-4 pr-8 pl-12 rounded-full w-full outline-none text-white text-sm"
          placeholder="Type your location to search"
          onChange={onTyping}
        />
      </div>

      {data && (
        <div className="bg-dark-800 rounded-b-4xl w-full text-white text-sm px-2 pb-4">
          <nav
            className="overflow-y-scroll overflow-x-hidden pr-2"
            style={{ maxHeight: 400 }}
          >
            <ul>
              {data?.map((item: LocationType) => (
                <li key={item.country}>
                  <button
                    type="button"
                    className="flex text-left transition ease-in-out duration-300 py-2 px-4 w-full items-center rounded-lg hover:bg-dark-900"
                  >
                    <MdLocationOn className="leading-4 mr-3" />
                    {item.name}
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
