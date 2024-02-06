import React, { useEffect, useState } from "react";
import { getMypage } from "../apis/mypage";

const Mypage = () => {
  const [data, setData] = useState();
  //로딩화면 구현
  const [loading, setLoading] = useState(true);
  //마이페이지는 이동했을 때 api를 한번만 찾아야함 useEffect사용
  useEffect(() => {
    //마이페이지(전체게시판) 정보 불러오기
    getMypage().then((res) => {
      setData(res);
      //데이터를 받아올 경우 로딩 중지
      setLoading(false);
    });
  }, []);

  if (loading) return <div>로딩중...</div>;

  //데이터의 초기값은 undefined
  return (
    <div>
      <div>전체 게시글 조회</div>
      <div>{data?.title}</div>
      <div>{data?.body}</div>
      <div>{data?.createdAt}</div>
    </div>
  );
};

export default Mypage;
