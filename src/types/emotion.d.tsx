import "@emotion/react"

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            black: string
            white: string

            gray900: string
            gray800: string
            gray700: string
            gray300: string
            
            magenta: string
            magenta100: string
            aqua: string
            aqua100: string
        },
        br6: string
        br10: string
    }
}