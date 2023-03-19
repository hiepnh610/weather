import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import SearchBoxComponent from 'components/SearchBox';
import CurrentWeatherComponent from 'components/weather/CurrentWeather';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="bg-dark-300 h-screen py-14">
        <div
          className="container mx-auto bg-dark-900 h-full p-8"
          style={{ borderRadius: 40 }}
        >
          <header>
            <div className="flex justify-center">
              <div style={{ width: 500 }}>
                <SearchBoxComponent />
              </div>
            </div>
          </header>

          <CurrentWeatherComponent />
        </div>
      </section>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
