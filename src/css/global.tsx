/** @jsxImportSource @emotion/react */
import {css, Theme} from "@emotion/react";
import reset from "emotion-reset"

export const globalCss = (theme: Theme) => css`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        color: ${theme.colors.white};
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        background-color: ${theme.colors.gray900};
    }
    input: focus {
        outline: none;
    }
    a{
        text-decoration: none;
    }
`;