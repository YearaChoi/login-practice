import React, { useState } from "react";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../apis/login";

const Home = () => {
  //input에 맞는 state와 onChange함수
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //로그인 처리가 끝날 경우 다음 페이지로 넘어가도록
  const router = useNavigate();

  const onChangeId = (e) => {
    setUsername(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const onClick = async () => {
    try {
      //위에 선언한 id, pw를 넘겨줌
      const result = await login(username, password);
      // console.log(result);

      // const { accessToken, refreshToken } = result;
      // localStorage.setItem("access", accessToken);
      // localStorage.setItem("refresh", refreshToken);

      const { uid } = result;
      //받아온 uid를 localstorage에 저장
      localStorage.setItem("uid", uid);
      //라우터를 통해 마이페이지로 보냄
      router("/boardlist");
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <Form>
        <Inputs>
          <Input placeholder="아이디" value={username} onChange={onChangeId} />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={onChangePw}
          />
        </Inputs>
        <Button onClick={onClick}>Login</Button>
      </Form>
      <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  );
};

export default Home;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
