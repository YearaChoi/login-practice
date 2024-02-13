import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { create } from "../apis/create";
import { Input, Inputs, Title, Wrapper } from "../components/Common";

function CreatePage() {
  //커스텀 hook import해서 사용한 경우
  const [title, onChangeTitle] = useForm();
  const [body, onChangeBody] = useForm();

  // 게시판 리스트로 이동하는 라우터
  const router = useNavigate();

  // create 버튼 클릭 시 실행되는 함수
  const onClick = async () => {
    // 로컬 스토리지에서 uid 가져오기
    const uid = localStorage.getItem("uid");
    // uid가 없으면 에러 처리
    if (!uid) {
      console.error("User ID not found in local storage");
      return;
    }

    try {
      // 게시글 생성 요청
      await create(title, body, uid);
      // 게시글 생성 후 게시판 페이지로 이동
      router("/boardlist");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };
  return (
    <Wrapper>
      <Title>새로운 게시글 작성</Title>
      <Inputs>
        <Input
          placeholder="게시글 제목"
          value={title}
          onChange={onChangeTitle}
        />
        <textarea
          placeholder="게시글 내용"
          value={body}
          onChange={onChangeBody}
        />
      </Inputs>

      <button onClick={onClick}>create</button>
    </Wrapper>
  );
}

export default CreatePage;
