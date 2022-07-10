import { css } from '@emotion/react'

export const EmailForm = {
  Container: css`
    display: flex;
    flex-direction: column;
    height: 80vh;
  `,
  Form: css`
    position: relative;
    height: 100%;
    div {
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
    input::placeholder {
      color: var(--gray-300);
      font-size: 16px;
    }
  `,
  Block: css`
    button {
      margin: 10px 0 10px 10px;
      padding: 10px 0;
    }
  `,
  BtnBlock: css`
    position: absolute;
    bottom: 5%;
  `,
}

// const InfoformContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   height: 80vh;
// `

// const InfoContentArea = styled.form`
//     position: relative;
//     height: 100%;
//     div{
//         display: flex;
//     }
//      input {
//         width: 239px;
//         font-size: 14px;
//         background-color: transparent;
//         border: none;
//         border-bottom: 1px solid var(--gray-700);
//         overflow: hidden;
//         resize: none;
//         margin: 10px 0;
//         padding: 10px 0;
//         color: white;
//      }
//      input::placeholder{
//         color: var(--gray-300);
//         font-size: 16px;
// `
// const InputBlock = styled.div`
//     button{
//         margin: 10px 0 10px 10px;
//         padding: 10px 0;
//     }
// `
// const StartbtnBlock = styled.div`
//     position: absolute;
//     bottom: 5%;
// `;
