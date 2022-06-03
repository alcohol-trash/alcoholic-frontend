import styled from "styled-components";
import CustomButton from '@/components/button/CustomButton';
import Link from "next/link";
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'


const AgreeformContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 70vh;
`

const AgreeContentArea = styled.form`
    position: relative;
    height: 100%;
    padding-top: 20px;
    input {
        width: 20px;
        height: 20px;
        border: none;
        color: var(--gray-700);
        margin: 10px 3px;
    }
    label{
        color: var(--white);
        margin: 10px 3px;
    }
`
const FormGroup = styled.div`
    display: flex;
    align-items: center;
`;

const AgreebtnBlock = styled.div`
    position: absolute;
    bottom: 5%;
`;

interface FormData {
    checkAll: boolean;
    checkAge: boolean;
    checkService: boolean;
    checkInfo: boolean;
}

const Terms = () => {
    const { register, formState: { isValid }, handleSubmit, reset } = useForm<FormData>({ mode: "onChange" });
    const onSubmit: SubmitHandler<FormData> = data => {
        console.log(data);
        reset();
    };
    const onError: SubmitErrorHandler<FormData> = error => console.log(error);
    return (
    <AgreeformContainer>
        <AgreeContentArea onSubmit={handleSubmit(onSubmit, onError)}>
            <FormGroup>
                <input
                    type="checkbox"
                    {...register('checkAll', {
                        required: true,
                    })}
                />
                <label style={{color: "var(--aqua)"}}>전체 동의하기</label> 
            </FormGroup>
            <hr style={{backgroundColor: "var(--gray-700)", height: "1px", border: "0px"}}/>
            <FormGroup>
                <input
                    type="checkbox"
                    {...register('checkAge', {
                        required: true,
                    })}
                />
                <label>만 19세 이상입니다. (필수)</label>  
            </FormGroup>
            <FormGroup>
                <input
                    type="checkbox"
                    {...register('checkService', {
                        required: true,
                    })}
                />
                <label>서비스 이용약관에 동의 (필수)</label>
            </FormGroup>
            <FormGroup>
                <input
                    type="checkbox"
                    {...register('checkInfo', {
                        required: true,
                    })}
                />
                <label>개인정보 수집 및 이용에 동의 (필수)</label> 
            </FormGroup>
            <AgreebtnBlock>
                <Link href="/createaccount">
                    <CustomButton type="submit" content="동의하고 계정 생성하기"
                        textalign='start' height={50} bgcolor={isValid ? "var(--aqua)" : "var(--gray-700)"} btncolor={isValid ? "var(--black)" : "var(--gray-300)"}
                    />
                </Link>
            </AgreebtnBlock>
        </AgreeContentArea>
    </AgreeformContainer>
    );
}

export default Terms;

