import axios from "axios";

export const deletePost = async (postId, authorUid) => {
  try {
    const response = await axios.delete(
      `https://ll-api.jungsub.com/ptrack/post/${postId}`,
      {
        data: { uid: authorUid },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
