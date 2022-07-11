import React from 'react'
import styled from 'styled-components'
import CustomButton from '@/components/button/CustomButton';
import { useForm, SubmitHandler} from 'react-hook-form'
import { useMutation } from 'react-query';
import Router from "next/router";
import { AxiosError } from 'axios';
import { logInAPI } from '@/apis/user';


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
     }
`
const StartbtnBlock = styled.div`
    position: absolute;
    bottom: 5%;
`;

interface LoginData {
  id: string;
  password: string;
}

const Loginform = () => {
  const { register, formState: { isValid, errors }, handleSubmit, reset } = useForm<LoginData>({ mode: "onChange" });
  const mutation = useMutation(logInAPI, {
    onSuccess: () => {
      //요청이 성공한 경우
      Router.push('/');
    },
    onError: (error: object) => {
      //요청에 에러가 발생된 경우
      alert(error);
    }
  });
  const onSubmit: SubmitHandler<LoginData> = data => {
    const id = data.id;
    const password = data.password;
    mutation.mutate({id, password});
    reset();
  };
  return (
    <InfoformContainer>
      <InfoContentArea onSubmit={handleSubmit(onSubmit)}>
        <label>아이디</label>
        <input
            placeholder='아이디를 입력해주세요.'
          {...register('id', {
            required: {value: true, message: "아이디를 확인해주세요"},
            maxLength: {value: 12, message: "아이디를 확인해주세요"},
            pattern: {value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/, message: "아이디를 확인해주세요"},
          })}
        />
        {errors.id && <p style={{color: "var(--aqua-100)", fontSize: "13px", margin: "5px 0 15px 0"}}>{errors.id.message}</p>}
        <label>비밀번호</label>
        <input
            placeholder='비밀번호를 입력해주세요.'
            type="password"
          {...register('password', {
            required: {value: true, message: "비밀번호를 확인해주세요"},
            maxLength: {value: 12, message: "비밀번호를 확인해주세요"},
            pattern: {value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/, message: "비밀번호를 확인해주세요"},
          })}
        />
        {errors.password && <p style={{color: "var(--aqua-100)", fontSize: "13px", margin: "5px 0 15px 0"}}>{errors.password.message}</p>}
        <StartbtnBlock>
          <CustomButton type="submit" content="로그인 하기"
            textalign='start' width={327} height={50} bgcolor={isValid ? "var(--aqua)" : "var(--gray-700)"} btncolor={isValid ? "var(--black)" : "var(--gray-300)"}
            disabled={isValid ? false : true}
          />
        </StartbtnBlock>
      </InfoContentArea>
    </InfoformContainer>
  );
}

export default Loginform;