export const tokens = {
    grey: {
      100: "#f0f0f3",
      200: "#e1e2e7",
      300: "#d1d3da",
      400: "#c2c5ce",
      500: "#b3b6c2",
      600: "#8f929b",
      700: "#6b6d74",
      800: "#48494e",
      900: "#242427",
    },
    primary: {
      // light green
      100: "#eef9ff",
      200: "#dcf3ff",
      300: "#cbecff",
      400: "#b9e6ff",
      500: "#a8e0ff",
      600: "#86b3cc",
      700: "#658699",
      800: "#435a66",
      900: "#222d33"
    },
    secondary: {
      // yellow
      100: "#fefdcc",
      200: "#fefa99",
      300: "#fdf866",
      400: "#fdf533",
      500: "#fcf300",
      600: "#cac200",
      700: "#979200",
      800: "#656100",
      900: "#323100"
    },
    tertiary: {
      // purple
      500: "#8884d8",
    },
    background: {
      light: "#2d2d34",
      main: "#1f2026",
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[700],
      },
    },
  };