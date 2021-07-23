import { authTypes } from "../types/authTypes";


export const login = (uid, name) => {
    return {
      type: authTypes.login,
      payload: {
        uid,
        name,
      },
    };
}



export const logout = () => {
  return {
    type: authTypes.logout,
  }
}