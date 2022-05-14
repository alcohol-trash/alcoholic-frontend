import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

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

  background-color: #fff;
  border-top: 1px solid var(--gray-3);
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
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 10px 16px;
    border: none;
    overflow: hidden;
    resize: none;

    ::placeholder {
      color: var(--gray-1);
    }
  }
`

const Tabbar = () => {
  const { register, handleSubmit, reset } = useForm()

  const onVaild = (data: any) => {
    console.log(data)
  }
  return (
    <TabbarContainer>
      <TabbarContentArea onSubmit={handleSubmit(onVaild)}>
        <textarea
          placeholder="로그인 후에 글을 남길 수 있어요"
          rows={1}
          {...register('content')}
        />
      </TabbarContentArea>
    </TabbarContainer>
  )
}

export default Tabbar
