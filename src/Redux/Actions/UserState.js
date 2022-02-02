import { auth, provider, storage } from "../../Firebase/Firebase";
import db from "../../Firebase/Firebase";

//Action:
const email = "amrshakour97@gmail.com";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});