import { HairColor } from "./Enum";

export interface User {
  name: string;
  age: number;
  email?: string;
  hairColor: HairColor;
}
