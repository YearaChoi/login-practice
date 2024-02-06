import axios from "axios";

export const getMypage = async () => {
  const uid = localStorage.getItem("uid");
  //전체 게시글 조회
  const result = await axios.get("https://ll-api.jungsub.com/ptrack/post", {
    headers: {
      Authorization: uid,
    },
  });
  //result의 ~를 내보내줄거임. 마이페이지에서 useEffect를 호출하면 결과가 보여짐
  return result.data;
};
