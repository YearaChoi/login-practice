import axios from "axios";

export const updatePost = async (postId, uid, title, body) => {
  try {
    const response = await axios.patch(
      `https://ll-api.jungsub.com/ptrack/post/${postId}`,
      {
        uid,
        title,
        body,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};
