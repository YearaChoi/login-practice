import axios from "axios";
//일단보류
export const getMypage = async () => {
  const access = localStorage.getItem("access");
  //전체 게시글 조회
  const result = await axios.get("https://ll-api.jungsub.com/ptrack/post", {
    headers: {
      Authorization: access,
    },
  });
  //결과를 result에 담아 result의 데이터(유저 정보)를 내보내줌. 마이페이지에서 useEffect를 호출하면 결과가 보여짐
  return result.data;
};
