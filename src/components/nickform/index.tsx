import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CustomButton from '@/components/button/CustomButton';

const NickformContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding-left: 10%;
`

const NicknameContentArea = styled.form`
    position: relative;
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

type FormData = {
    nickname: string;
}

const Nickform = () => {
  const { register, setValue, handleSubmit, formState: {errors} } = useForm<FormData>();

  const onValid = (data: any) => {
    console.log(data);
  }
  return (
    <NickformContainer>
        <NicknameContentArea onSubmit={handleSubmit(onValid)}>
            <input
             type="text"
             {...register('nickname')}
            />
        </NicknameContentArea>
        <StartbtnBlock>
            <CustomButton  type="submit" content="Alcoholic 시작하기" 
            textalign='start'width={300} height={50} bgcolor="var(--gray-4)" btncolor="var(--white)"
            borderradius='10px'/>
        </StartbtnBlock>
    </NickformContainer>
  );
}

export default Nickform;
