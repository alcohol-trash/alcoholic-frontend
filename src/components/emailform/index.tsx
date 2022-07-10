import React from 'react'
import styled from 'styled-components'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import CustomButton from '@/components/Button/CustomButton'

const InfoformContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 80vh;
`

const InfoContentArea = styled.form`
    position: relative;
    height: 100%;
    div{
        display: flex;
    }
     input {
        width: 239px;
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
const InputBlock = styled.div`
  button {
    margin: 10px 0 10px 10px;
    padding: 10px 0;
  }
`
const StartbtnBlock = styled.div`
  position: absolute;
  bottom: 5%;
`

interface FormData {
  email: string
}

const Emailform = () => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    reset()
  }
  const onError: SubmitErrorHandler<FormData> = (error) => console.log(error)
  return (
    <InfoformContainer>
      <InfoContentArea onSubmit={handleSubmit(onSubmit, onError)}>
        <label>이메일</label>
        <InputBlock>
          <input
            placeholder="이메일을 입력해주세요."
            {...register('email', {
              required: true,
              maxLength: 12,
              pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/,
            })}
          />
          <CustomButton
            type="submit"
            content="인증 요청"
            width={84}
            height={44}
            bgcolor={isValid ? 'var(--aqua)' : 'var(--gray-700)'}
            btncolor={isValid ? 'var(--black)' : 'var(--gray-300)'}
          />
        </InputBlock>
        {isValid ? (
          ' '
        ) : (
          <p
            style={{
              color: 'var(--aqua-100)',
              fontSize: '13px',
              margin: '5px 0 15px 0',
            }}
          >
            이메일을 확인해주세요.
          </p>
        )}
        <StartbtnBlock>
          <CustomButton
            type="submit"
            content="인증 확인"
            textalign="start"
            width={327}
            height={50}
            bgcolor={isValid ? 'var(--aqua)' : 'var(--gray-700)'}
            btncolor={isValid ? 'var(--black)' : 'var(--gray-300)'}
          />
        </StartbtnBlock>
      </InfoContentArea>
    </InfoformContainer>
  )
}

export default Emailform
