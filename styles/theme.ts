const defaultTheme = {
  fontSize: "16px",
  spacing: (num: number = 1) => num * 8,
  maxWidth: "768px",
  borderColor: "rgba(0, 0, 0, 0.12)",
};

export const lightTheme = {
  body2: "#FFFFFF",
  body: "#F7F6F3",
  text: "#383530",
  toggleBorder: "",
  ...defaultTheme,
};

export const darkTheme = {
  body: "#373C3F",
  body2: "#2F3437",
  text: "#FAFAFA",
  toggleBorder: "rgba(55, 53, 47, 0.6)",
  ...defaultTheme,
};
