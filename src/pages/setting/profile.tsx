import Header from '@/components/Header'
import Backbutton from '@/components/backbutton'

import * as styles from '@/css/setting/settingProfileStyles'

const Profile = () => {
  return (
    <section css={styles.container}>
      <Header title="프로필 편집" left={<Backbutton />} />
    </section>
  )
}

export default Profile
