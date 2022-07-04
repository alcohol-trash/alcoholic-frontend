import styled from "@emotion/styled";
import {Gnb} from "../css/home";

//Global Navigation Bar
export const GnbContainer = styled.section`
    ${Gnb.Container}
`;

export const GnbBlock = styled.div`
    ${Gnb.Block}
    ${Gnb.BlockDetail}
`;

export const GnbLogo = styled.div`
    ${Gnb.Block}
    width: 74px;
    height: 20px;
    h1{
        font-size: 18px;
    }
`;

export const GnbProfile = styled.div`
    ${Gnb.Block}
    ${Gnb.Profile}
`;

export const GnbList = styled.ul`
    ${Gnb.List}
`;

export const GnbListItem = styled.li`
    ${Gnb.ListItem}
`;
