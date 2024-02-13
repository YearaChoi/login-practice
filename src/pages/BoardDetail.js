import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostDetail } from "../apis/boardDetail";

function BoardDetail() {
  //훅을 사용하여 URL에서 게시물의 ID를 가져옴
  const { id } = useParams();
  //훅을 사용하여 detailData 상태를 초기화. 이 상태는 게시물의 세부 정보를 저장.
  const [detailData, setDetailData] = useState(null);

  // 훅을 사용하여 컴포넌트가 마운트될 때 백엔드에서 게시물의 세부 정보를 가져옴.
  // id가 변경될 때마다 해당 게시물의 정보를 새로 가져오도록 설정됨.
  // 가져온 게시물의 세부 정보는 setDetailData()를 사용하여 detailData 상태에 설정.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostDetail(id);
        setDetailData(data);
      } catch (error) {}
    };

    fetchData();
  }, [id]);

  // detailData가 null인 경우 로딩 중을 나타내는 <div>Loading...</div>이 렌더링.
  // 그렇지 않은 경우, 게시물의 세부 정보가 화면에 렌더링.
  if (detailData === null) return <div>Loading...</div>;

  return (
    // 중요! 백엔드에서 반환된 데이터 구조를 고려하여 detailData내의 정확한 필드에 접근해야함.
    <div>
      <h1>게시물 세부정보</h1>
      <button>
        <Link to={`/update/${id}`}>수정</Link>
      </button>
      <button>삭제</button>
      <h2>제목: {detailData.uid.title}</h2>
      <p>날짜: {detailData.uid.createdAt}</p>
      <p>작성자: {detailData.uid.uid.name}</p>
      <p>내용: {detailData.uid.body}</p>
    </div>
  );
}

export default BoardDetail;
