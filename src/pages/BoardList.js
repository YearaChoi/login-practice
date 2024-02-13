import React, { useEffect, useState } from "react";
import { getMypage } from "../apis/mypage";
import styled from "styled-components";
import { Title } from "../components/Common";
import { Link } from "react-router-dom";

const Mypage = () => {
  //가져온 데이터를 꺼내주기 위함
  const [data, setData] = useState([]);
  //로딩화면 구현
  const [loading, setLoading] = useState(true);
  //search 구현
  const [search, setSearch] = useState("");
  // 마이페이지는 이동했을 때 api를 한번만 찾아야함 useEffect사용
  useEffect(() => {
    //마이페이지(전체게시판) 정보 불러오기
    getMypage().then((res) => {
      // 만약 res가 배열이 아니라면 기본값으로 빈 배열을 설정
      setData(Array.isArray(res.targetPosts) ? res.targetPosts : []);
      setLoading(false);
    });
  }, []);

  //setData에 바로 값을 넣어주기 전에 console에 api로부터 데이터를 잘 받아오는지 확인!

  if (loading) return <div>로딩중...</div>;

  //데이터의 초기값은 undefined
  // 게시글은 targetPosts 배열 안에 담겨 있음. 따라서 targetPosts 배열에 대해 map() 함수를 사용하여 각 게시글을 반복하여 출력할 수 있다.
  return (
    <div>
      <Title>
        <div>전체 게시글 조회 게시판</div>
        <div>글의 제목을 누르면 특정 게시글로 이동합니다..</div>
        <input
          type="text"
          placeholder="게시글 찾기"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <Link to="/create">게시글 생성하기</Link>
        </button>
      </Title>

      {data
        .filter((post) => {
          if (search === "") {
            return true; // 검색어가 없으면 모든 게시글을 보여줌
          } else {
            const searchLowerCase = search.toLowerCase();
            // 게시글 제목 또는 유저 이름에 검색어가 포함되어 있는 경우에만 보여줌
            return (
              post.title.toLowerCase().includes(searchLowerCase) ||
              post.uid.name.toLowerCase().includes(searchLowerCase)
            );
          }
        })
        .map((post) => (
          //React에서 리스트를 렌더링할 때 각 항목에 고유한 키를 제공해야 함
          //매핑하는 요소인 Wrapper에 key prop을 설정
          <Wrapper key={post._id}>
            <div>{post.uid.name}</div>
            <Link to={`/boardlist/${post._id}`}>{post.title}</Link>
            <div>{post.createdAt}</div>
          </Wrapper>
        ))}
    </div>
  );
};

export default Mypage;

const Wrapper = styled.div`
  border: 2px solid red;
  margin-bottom: 20px;
`;
