export interface IData {
  _id: string;
  title: string;
  arabicLanguage: string;
  rusLanguage: string;
  type: string;
  meaning: string;
  favourites: boolean;
  mp3?: any;
}
export interface ITitle {
  title: string;
  type: string;
}
export interface IParamsType {
  type: string;
}
export interface ISignInData {
  accesToken: string;
  refreshToken: string;
  iresIn: number;
  userId: string;
}
export interface IUserData {
  email: string;
  favourites: [];
  password: string;
  name: string;
  secondName: string;
}
