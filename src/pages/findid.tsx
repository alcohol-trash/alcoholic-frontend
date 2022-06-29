import React from "react";
import styled from "styled-components";
import Homebar from "@/components/homebar";
import Emailform from "@/components/emailform";

const FindContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: var(--gray-900);
    padding: 0 24px;
    p{
        color: var(--gray-300);
    }
`;
const DescriptionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 10vh;
    h1{
        margin: 10px 0;
        line-height: 1.5em;
        font-size: 20px;
        color: var(--white);
    }
`;
const InfoContainer = styled.section`
    padding-top: 50px;
`;

const FindId = () => {
  return (
    <FindContainer>
        <Homebar/>
        <DescriptionContainer>
            <h1>아이디 찾기</h1>
        </DescriptionContainer>
        <InfoContainer>
            <Emailform/>
        </InfoContainer>
    </FindContainer>
  );
}

export default FindId;