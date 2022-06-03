import styled from 'styled-components';
import Description from '@/components/description';
import Nickform from '@/components/nickform';

const SignupContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: var(--gray-900);
    padding: 0 24px;
`;
const DescriptionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 35vh;
`;

const CreateAccount = () => {
    return (
        <SignupContainer>
            <DescriptionContainer>
                <Description titleFirst='알코홀-릭에서 사용 할' titleSecond='닉네임을 입력해주세요.' 
                explainFirst='이름은 공백없이 12자리 이하,' explainSecond='기호는 _.만 사용가능합니다.'/>
            </DescriptionContainer>
            <Nickform/>
        </SignupContainer>
    );
}

export default CreateAccount;