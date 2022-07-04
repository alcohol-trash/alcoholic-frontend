import {css} from "@emotion/react";
import theme from "../theme";

//Global Navigation Bar
export const Gnb = {
    Container: css`
        top: 0;
        left: 0;
        right: 0;
    
        display: flex;
        flex-direction: column;
    `,
    Block: css`
        display: flex;
        align-items: center;
    `,
    BlockDetail: css`
        justify-content: space-between;
        padding: 20px;
    `,
    Profile: css`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
    `,
    List: css`
        width: 100%;
        position: relative;
        list-style: none;
    `,
    ListItem: css`
        border-bottom: 1px solid ${theme.colors.gray800};
        margin-bottom: 10px;
        padding-bottom: 15px;
        width: 33%;
        height: 100%;
        float: left;
        position: relative;
        text-align: center;
        color: ${theme.colors.gray300};
    `
}