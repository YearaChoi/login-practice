import axios from "axios";
//axios사용 async로 해 줌
//로그인 함수를 위해 id, pw를 받아옴
export const login = async (id, pw) => {
  try {
    //로그인 처리
    const result = await axios.post(
      "https://ll-api.jungsub.com/ptrack/user/login",
      {
        id,
        pw,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //uid처럼 data안에 data가 들어가 있는 형태(?) 잘 모르겠음..
    return result.data;
  } catch (error) {
    // 에러가 발생시 콘솔에 에러를 출력하고 빈 객체를 반환하거나 에러 처리 수행
    console.error("Sign up error:", error);
    return {};
  }
};
