import React from "react";
import { Input, Inputs, Title, Wrapper } from "../components/Common";
import { useForm } from "../hooks/useForm";
import styled from "styled-components";
import { signUp } from "../apis/signUp";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  //커스텀 hook import해서 사용한 경우
  const [username, onChangeUsername] = useForm();
  const [password, onChangePassword] = useForm();
  const [name, onChangeName] = useForm();
  const [email, onChangeEmail] = useForm();

  //회원가입을 마치면 홈으로 이동
  const router = useNavigate();

  //sign up 버튼에 대한 onClick
  const onClick = async () => {
    await signUp(username, password, name, email);
    router("/");
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input
          placeholder="아이디"
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <Input placeholder="이름" value={name} onChange={onChangeName} />
        <Input placeholder="이메일" value={email} onChange={onChangeEmail} />
      </Inputs>

      <Button onClick={onClick}>Sign up</Button>
    </Wrapper>
  );
};

export default Signup;

const Button = styled.div`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 20px;
`;
