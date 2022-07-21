import * as styles from './styles'

const ModalBlock = () => {
  return (
    <div css={styles.modalBlock}>
      회원탈퇴 전 확인해주세요.
      <br />
      <ul>
        <li>
          내 프로필 정보, 내가 쓴 글, 댓글이 모두 사라지며 복구가 불가능합니다.
        </li>
        <li>주의사항</li>
      </ul>
    </div>
  )
}

export default ModalBlock
