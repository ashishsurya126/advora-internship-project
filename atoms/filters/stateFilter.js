import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const stateFilter = atom({
  default: null,
  key: uuidv4(),
})