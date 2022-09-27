/* istanbul ignore file */
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ThemeProvider } from '@emotion/react'
import theme from '../theme'
import GlobalStyle from '@/style/GlobalStyle'
import { componentContainer } from '@/css/global'

// staleTime    : refetch 방지
// OnWindowFocus: 화면 focus 시 refetch
// OnReconnect  : 네트워크 reconnect 시 refetch
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div css={componentContainer}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
