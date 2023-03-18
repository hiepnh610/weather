import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SearchBoxComponent from './components/SearchBox';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_WEATHER);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <section className="bg-dark-300 h-screen py-36">
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
        </div>
      </section>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
