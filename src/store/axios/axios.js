import { getUser } from "../../utils/sessionStorage";
import { http } from "./http";

export const Method = {
  async postData(action) {
    console.log("actionaction", action);
    try {
      const response = await http.post(action.URL, action.payload, {
        headers: {
          "Content-Type": action.contentType,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async getData(action) {
    try {
      const response = await http.get(action.URL, {
        headers: {
          "Content-Type": action.contentType,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async putData(action) {
    try {
      const response = http.put(action.URL, action.payload, {
        headers: {
          "Content-Type": action.contentType,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteData(action) {
    try {
      const response = http.delete(action.URL, {
        headers: {
          "Content-Type": action.contentType,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
