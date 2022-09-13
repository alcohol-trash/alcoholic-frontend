/* istanbul ignore file */
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { ThemeProvider } from '@emotion/react'
import theme from '../theme'
import GlobalStyle from '@/style/GlobalStyle'
import { componentContainer } from '@/css/global'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any
  }
}

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
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
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
    </GoogleOAuthProvider>
  )
}

export default App
