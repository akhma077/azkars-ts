import axios from "axios";
import { IData } from "../types/types";

const token = document.cookie.match(/token=(.+?)(;|$)/) || [];

const LOCAL_API = "192.168.88.33";

const LOCAL_API_PORT = "9099";

export default class ApiService {
  static async getAllData(type: any) {
    try {
      const { data } = await axios<IData[]>({
        method: "GET",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/content/getAll/${type}`,
        headers: {
          "content-type": "application/json",
          Authorization: token ? `Bearer ${token[1]}` : "",
          "User-Token": 1,
        },
      });

      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async signIn(email: string, pass: string | undefined) {
    try {
      const { data } = await axios({
        method: "POST",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/auth/signIn`,
        data: {
          email: email,
          password: pass,
        },
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token[1]}`,
          "User-Token": 1,
        },
      });

      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async signup(
    email: string,
    password: string,
    name: string,
    secondName: string
  ) {
    try {
      const { data } = await axios({
        method: "POST",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/auth/signUp`,
        data: {
          email: email,
          password: password,
          name: name,
          secondName: secondName,
        },
      });

      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async getUserData(userID: string, tok: string) {
    try {
      if (userID) {
        const { data } = await axios({
          method: "PATCH",
          url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/users/${userID}`,
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${tok || token[1]}`,
            "User-Token": 1,
          },
        });
        return data;
      }
    } catch (e) {
      console.error(e);
    }
  }
  static async favourities(azkId: string) {
    try {
      const { data } = await axios({
        method: "POST",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/favourites/${azkId}`,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token[1]}`,
          "User-Token": 1,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async deleteFavourities(azkId: string) {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/favourites/${azkId}`,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token[1]}`,
          "User-Token": 1,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  static async addNewRoute(title: string, image: string, route: string) {
    try {
      const { data } = await axios({
        method: "POST",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/navbar`,
        data: {
          title: title,
          image: image,
          route: route,
        },
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token[1]}`,
          "User-Token": 1,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async getNavBAr(title: string, image: string, route: string) {
    try {
      const { data } = await axios({
        method: "POST",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/navbar`,

        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token[1]}`,
          "User-Token": 1,
        },
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
