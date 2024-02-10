import axios from "axios";

export const getPostDetail = async (id) => {
  const access = localStorage.getItem("access");
  //특정 게시글 조회 및 세부정보
  //api post/뒤에 id가 오는 형태
  const result = await axios.get(
    `https://ll-api.jungsub.com/ptrack/post/${id}`,
    {
      headers: {
        Authorization: access,
      },
    }
  );
  //결과를 result에 담아 result의 데이터(유저 정보)를 내보내줌. 마이페이지에서 useEffect를 호출하면 결과가 보여짐
  return result.data;
};
