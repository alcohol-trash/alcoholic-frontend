import styled from "@emotion/styled";
import {Homebar, LoginForm, LoginPage} from "../css/login";

//Homebar
export const HomebarContainer = styled.section`
    ${Homebar.Container}
`
export const HomeLogoBlock = styled.div`
    ${Homebar.Block}
`

//LoginForm
export const InfoFormContainer = styled.section`
  ${LoginForm.Container}
`

export const InfoContentArea = styled.form`
    ${LoginForm.Form}
`

export const StartBtnBlock = styled.div`
    ${LoginForm.BtnBlock}
`;

//LoginPage
export const LoginContainer = styled.section`
    ${LoginPage.Container}
`;

export const DescriptionContainer = styled.section`
    ${LoginPage.TopContainer}
`;

export const InfoContainer = styled.section`
    ${LoginPage.BottomContainer}
`;

export const LinkBlock = styled.div`
    ${LoginPage.LinkBlock}
`;

export const LoginTitle = styled.h1`
    ${LoginPage.Title}
`;
