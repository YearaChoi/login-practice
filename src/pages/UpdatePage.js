import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../apis/updatePost";
import { getPostDetail } from "../apis/boardDetail";

function UpdatePage() {
  const { id } = useParams(); // URL에서 게시글 ID를 가져옴
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useNavigate();

  console.log(id);
  console.log(updatePost);
  // 페이지가 마운트되면 게시글 세부 정보를 가져와서 제목과 내용을 설정함
  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const data = await getPostDetail(id);
        setTitle(data.uid.title);
        setBody(data.uid.body);
      } catch (error) {
        console.error("게시글 세부 정보를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchPostDetail();
  }, [id]); // 게시글 ID가 변경될 때마다 실행됨

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 로컬 스토리지에서 uid 가져오기
    const uid = localStorage.getItem("uid");
    // uid가 없으면 에러 처리
    if (!uid) {
      console.error("User ID not found in local storage");
      return;
    }
    try {
      await updatePost(id, uid, title, body); // 게시글 수정 API 호출
      router(`/boardlist`); // 수정이 완료되면 게시글 목록 페이지로 이동
    } catch (error) {
      console.error("게시글 수정 오류:", error);
    }
  };

  return (
    <div>
      <h1>게시글 수정</h1>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          내용:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <br />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}

export default UpdatePage;
