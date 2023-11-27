import { getUser } from "../../utils/sessionStorage";
import { http } from "./http";

export const Method = {
  async postData(action) {
    const loginToken = getUser();

    try {
      const response = http.post(action.URL, action.payload, {
        headers: {
          "Content-Type": action.contentType,
          Authorization: loginToken ? `token ${loginToken.Token}` : "",
          "Guest-Token":
            "de0b558929ed7d3a10abb53305d28b16089a1cd84120ad4902452e5fbbac6b74",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async getData(action) {
    try {
      const loginToken = getUser();
      const response = http.get(action.URL, {
        headers: {
          "Content-Type": action.contentType,
          Authorization: getUser() ? `token ${loginToken.Token}` : "",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async putData(action) {
    try {
      const loginToken = getUser();
      console.log(loginToken);
      const response = http.put(action.URL, action.payload, {
        headers: {
          "Content-Type": action.contentType,
          Authorization: loginToken ? `token ${loginToken.Token}` : "",
          "Guest-Token":
            "de0b558929ed7d3a10abb53305d28b16089a1cd84120ad4902452e5fbbac6b74",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteData(action) {
    try {
      const loginToken = getUser();
      const response = http.delete(action.URL, {
        headers: {
          "Content-Type": action.contentType,
          Authorization: loginToken ? `token ${loginToken.Token}` : "",
          "Guest-Token":
            "de0b558929ed7d3a10abb53305d28b16089a1cd84120ad4902452e5fbbac6b74",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
