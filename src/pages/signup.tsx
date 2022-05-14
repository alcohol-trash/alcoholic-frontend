import styled from 'styled-components';
import Description from '@/components/description';
import Nickform from '@/components/nickform';

const SignupContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
const DescriptionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 40vh;
`;

const Signup = () => {
    return (
        <SignupContainer>
            <DescriptionContainer>
                <Description titleFirst='Alcoholic에서 사용 할' titleSecond='이름을 입력해주세요.' 
                explainFirst='이름은 공백없이 12자리 이하,' explainSecond='기호는 _.만 사용가능합니다.'/>
            </DescriptionContainer>
            <Nickform/>
        </SignupContainer>
    );
}

export default Signup;