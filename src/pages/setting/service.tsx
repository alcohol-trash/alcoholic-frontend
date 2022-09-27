import React from 'react'
import { useQuery } from 'react-query'
import { useForm } from 'react-hook-form'

import { memberInfoAPI } from '@/api/user'
import { serviceValidation } from '@/libs/validations/serviceValidation'

import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import ContentForm from '@/components/ContentForm'

import * as styles from '@/css/setting/settingServiceStyles'
import TextField from '@/components/TextField'

type FormTypes = {
  email: string
  message: string
}

const Service = () => {
  const { data: me } = useQuery('user', async () => await memberInfoAPI())

  const {
    register,
    setValue,
    formState: { isValid },
  } = useForm<FormTypes>({
    resolver: serviceValidation(),
  })

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true })
  }

  return (
    <>
      <Header title="고객센터" left={<BackButton />} />
      <section css={styles.container}>
        <form
          css={styles.form}
          action="https://formspree.io/f/mknykkvw"
          method="POST"
        >
          <div>
            <TextField
              placeholder="이메일을 입력하세요"
              value={me?.data.email}
              {...register('email')}
              onChange={handleChange}
            />
            <ContentForm
              placeholder="내용을 입력하세요"
              {...register('message')}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button
              type="submit"
              style={isValid ? 'primary' : 'default'}
              size="sm"
            >
              전송
            </Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default React.memo(Service)
