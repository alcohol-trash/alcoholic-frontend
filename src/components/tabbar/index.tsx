import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import Image from 'next/image';
import ProfileImg from '@/public/assets/profile_img.png';

const TabbarContainer = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 8px 16px;

  background-color: var(--gray-900);
`

const TabbarContentArea = styled.form`
  display: flex;
  align-items: center;
  
  height: 40px;
  padding: 0px;
  width: 100%;
  textarea {
    width: 100%;
    font-size: 14px;
    background-color: var(--gray-700);
    border-radius: 20px;
    padding: 10px 16px;
    border: none;
    overflow: hidden;
    resize: none;

    ::placeholder {
      color: var(--gray-300);
    }
  }
`

const HeaderProfile = styled.div`
  margin: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  `;

const Tabbar = () => {
  const { register, handleSubmit, reset } = useForm()

  const onVaild = (data: any) => {
    console.log(data)
  }
  return (
    <TabbarContainer>
      <TabbarContentArea onSubmit={handleSubmit(onVaild)}>
        <HeaderProfile>
            <Image src={ProfileImg} width={32} height={32} />
        </HeaderProfile>
        <textarea
          placeholder="로그인 후에 작성할 수 있습니다."
          rows={1}
          {...register('content')}
        />
      </TabbarContentArea>
    </TabbarContainer>
  )
}

export default Tabbar
