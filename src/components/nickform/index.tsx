import React from 'react'
import styled from 'styled-components'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import CustomButton from '@/components/button/CustomButton';

const NickformContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding-left: 10%;
`

const NicknameContentArea = styled.form`
    position: relative;
    height: 100%;
     input {
        width: 300px;
        height: 50px;
        border-radius: 10px;
        font-size: 14px;
        background-color: var(--gray-3);
        border: none;
        overflow: hidden;
        resize: none;
     }
`
const StartbtnBlock = styled.div`
    position: absolute;
    bottom: 10%;
`;

interface FormData {
  nickname: string;
}

const Nickform = () => {
  const { register, formState: { isValid }, handleSubmit, reset } = useForm<FormData>({ mode: "onChange" });
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    reset();
  };
  const onError: SubmitErrorHandler<FormData> = error => console.log(error);
  return (
    <NickformContainer>
      <NicknameContentArea onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          {...register('nickname', {
            required: true,
            maxLength: 12,
            pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/
          })}
        />
        <StartbtnBlock>
          <CustomButton type="submit" content="Alcoholic 시작하기"
            textalign='start' width={300} height={50} bgcolor={isValid ? "var(--primary)" : "var(--gray-4)"} btncolor="var(--white)"
          />
        </StartbtnBlock>
      </NicknameContentArea>
    </NickformContainer>
  );
}

export default Nickform;
