import React from 'react'
import styled from 'styled-components'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import CustomButton from '@/components/Button/CustomButton'

const NickformContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 60vh;
`

const NicknameContentArea = styled.form`
  position: relative;
  height: 100%;
  input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    font-size: 14px;
    background-color: var(--gray-300);
    border: none;
    overflow: hidden;
    resize: none;
    margin: 7px 0;
  }
`
const StartbtnBlock = styled.div`
  position: absolute;
  bottom: 5%;
`

interface FormData {
  nickname: string
}

const Nickform = () => {
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
    <NickformContainer>
      <NicknameContentArea onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          {...register('nickname', {
            required: true,
            maxLength: 12,
            pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|._|]+$/,
          })}
          style={{ backgroundColor: 'var(--gray-800)', color: 'var(--white)' }}
        />
        {isValid ? (
          <p style={{ color: 'var(--aqua)', fontSize: '13px' }}>
            사용 가능한 닉네임입니다.
          </p>
        ) : (
          <p style={{ color: 'var(--gray-300)', fontSize: '13px' }}>
            이미 사용중인 닉네임입니다.
          </p>
        )}
        <StartbtnBlock>
          <CustomButton
            type="submit"
            content="알코홀-릭 시작하기"
            textalign="start"
            width={327}
            height={50}
            bgcolor={isValid ? 'var(--aqua)' : 'var(--gray-700)'}
            btncolor={isValid ? 'var(--black)' : 'var(--gray-300)'}
          />
        </StartbtnBlock>
      </NicknameContentArea>
    </NickformContainer>
  )
}

export default Nickform
