import axios from "axios";

export const create = async (title, body, uid) => {
  try {
    const result = await axios.post(
      "https://ll-api.jungsub.com/ptrack/post/",
      {
        title,
        body,
        uid,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // 서버에서 반환한 응답(uid, ok) 그대로 반환
    return result.data;
  } catch (error) {
    // 에러가 발생시 콘솔에 에러를 출력하고 빈 객체를 반환하거나 에러 처리 수행
    console.error("Create error:", error);
    return {};
  }
};
