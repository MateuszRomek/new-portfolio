import { darkTheme } from "../styles/theme";

type CustomTheme = typeof darkTheme;

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
