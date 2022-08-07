import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { FaUserCircle as UserFace } from 'react-icons/fa'

import Header from '@/components/Header'
import Backbutton from '@/components/backbutton'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import ValidateMessage from '@/components/ValidateMessage'

import * as styles from '@/css/setting/settingProfileStyles'
import { getNicknameFormSchema } from '@/libs/validations/nicknameValidation'

type FormTypes = {
  nickname: string
}

const Profile = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(getNicknameFormSchema),
  })
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }
  const handleSubmitClick = (data: FormTypes) => {
    console.log(data)
    //api 연결
  }
  return (
    <>
      <Header
        title="프로필 편집"
        left={<Backbutton />}
        right={<Button style="secondary">수정</Button>}
      />
      <section css={styles.container}>
        <section css={styles.btnBlock}>
          <div css={styles.imgBlock}>
            <Image src="/assets/camera.png" width={20} height={20} />
          </div>
          <div css={styles.imgBlock}>
            <Image src="/assets/delete.png" width={20} height={20} />
          </div>
        </section>
        <section css={styles.profileBlock}>
          <div css={styles.img}>
            <UserFace size={80} />
          </div>
          <div css={styles.nickname}>닉네임</div>
        </section>
        <section>
          <label>닉네임</label>
          <div css={styles.inputBlock}>
            <div css={styles.leftBlock}>
              <TextField {...register('nickname')} onChange={handleChange} />
              {errors?.nickname && (
                <ValidateMessage result={errors?.nickname} />
              )}
            </div>
            <div css={styles.rightBlock}>
              <Button
                size="sm"
                align="center"
                style={isValid ? 'primary' : 'default'}
                onClick={handleSubmit(handleSubmitClick)}
              >
                확인
              </Button>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Profile
