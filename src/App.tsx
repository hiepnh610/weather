import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="bg-dark-300 h-screen py-36">
        <div className="container mx-auto bg-dark-600 h-full rounded-3xl p-8">
          <p className="text-light-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            rem tenetur sapiente perspiciatis quos incidunt vel, a excepturi
            omnis doloribus nemo rerum qui libero error quaerat. Optio
            voluptates fuga aperiam.
          </p>
        </div>
      </section>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
