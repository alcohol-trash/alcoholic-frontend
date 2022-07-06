import styled from 'styled-components';
import Terms from '@/components/terms';

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
    height: 30vh;
    h1{
        margin: 10px 0;
        line-height: 1.5em;
        font-size: 20px;
        color: var(--white);
    }
`;
const Signup = () => {
    return (
        <SignupContainer>
            <DescriptionContainer>
                <h1>만나서 반가워요,</h1>
                <h1>알코홀-릭<br/>서비스 이용약관</h1>
            </DescriptionContainer>
            <Terms/>
        </SignupContainer>
    );
}

export default Signup;