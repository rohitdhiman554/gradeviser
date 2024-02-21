import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Fragment, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return  <Fragment>
  <QueryClientProvider client={queryClient}>
  

    <Component {...pageProps} />
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
</Fragment>
}
