import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    gray: {
      300: string
      700: string
      800: string
      900: string
    }
    magenta: {
      100: string
      500: string
    }
    aqua: {
      100: string
      500: string
    }
  }
}
