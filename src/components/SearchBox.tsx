import React, { useState } from 'react';
import { MdSearch, MdLocationOn } from 'react-icons/md';

const data = [
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

const SearchBoxComponent = () => {
  const [showSuggestion, setToShowSuggesetion] = useState(true);

  return (
    <div className="bg-dark-800 rounded-4xl">
      <div className="relative">
        <MdSearch className="text-white absolute top-1/2 left-6 text-xl -translate-y-1/2 leading-5" />

        <input
          type="text"
          className="bg-dark-800 border-none py-4 pr-8 pl-14 rounded-full w-full outline-none text-white text-sm"
          placeholder="Type your location to search"
        />
      </div>

      {showSuggestion && (
        <nav
          className="bg-dark-800 rounded-b-4xl w-full text-white text-sm overflow-y-scroll overflow-x-hidden"
          style={{ maxHeight: 400 }}
        >
          <ul>
            {data?.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="flex text-left transition ease-in-out duration-300 py-2 px-6 w-full items-center hover:bg-dark-900 hover:translate-x-2"
                >
                  <MdLocationOn className="leading-4 mr-2" />
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default SearchBoxComponent;
