import React from 'react'
import styled from 'styled-components'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import CustomButton from '@/components/button/CustomButton';

const InfoformContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 70vh;
`

const InfoContentArea = styled.form`
    position: relative;
    height: 100%;
     input {
        width: 100%;
        font-size: 14px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--gray-700);
        overflow: hidden;
        resize: none;
        margin: 10px 0;
        padding: 10px 0;
        color: white;
     }
     input::placeholder{
        color: var(--gray-300);
        font-size: 16px;
`
const StartbtnBlock = styled.div`
    position: absolute;
    bottom: 5%;
`;

interface FormData {
  id: string;
  password: string;
}

const Loginform = () => {
  const { register, formState: { isValid }, handleSubmit, reset } = useForm<FormData>({ mode: "onChange" });
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    reset();
  };
  const onError: SubmitErrorHandler<FormData> = error => console.log(error);
  return (
    <InfoformContainer>
      <InfoContentArea onSubmit={handleSubmit(onSubmit, onError)}>
        <label>아이디</label>
        <input
            placeholder='아이디를 입력해주세요.'
          {...register('id', {
            required: true,
            maxLength: 12,
            pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/
          })}
        />
        {isValid ? " " : <p style={{color: "var(--aqua-100)", fontSize: "13px", margin: "5px 0 15px 0"}}>아이디를 확인해주세요.</p>}
        <label>비밀번호</label>
        <input
            placeholder='비밀번호를 입력해주세요.'
            type="password"
          {...register('password', {
            required: true,
            maxLength: 12,
            pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/
          })}
        />
        {isValid ? " " : <p style={{color: "var(--aqua-100)", fontSize: "13px", margin: "5px 0 15px 0"}}>비밀번호를 확인해주세요.</p>}
        <StartbtnBlock>
          <CustomButton type="submit" content="로그인 하기"
            textalign='start' width={327} height={50} bgcolor={isValid ? "var(--aqua)" : "var(--gray-700)"} btncolor={isValid ? "var(--black)" : "var(--gray-300)"}
          />
        </StartbtnBlock>
      </InfoContentArea>
    </InfoformContainer>
  );
}

export default Loginform;