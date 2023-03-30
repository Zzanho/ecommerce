import {createTheme} from '@mui/material/styles';
export const shades = {
    primary: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },
    secondary: {
        100: "#eff7e7",
        200: "#dff0d0",
        300: "#d0e8b8",
        400: "#c0e1a1",
        500: "#b0d989",
        600: "#8dae6e",
        700: "#6a8252",
        800: "#465737",
        900: "#232b1b"
    },
    neutral: {
        100: "#f5f5f5",
        200: "#ecebeb",
        300: "#e2e1e1",
        400: "#d9d7d7",
        500: "#cfcdcd",
        600: "#a6a4a4",
        700: "#7c7b7b",
        800: "#535252",
        900: "#292929"
    },
};


export const theme = createTheme({
    palette:{
        primary: {
            main: shades.primary[500]
        },
        secondary: {
            main: shades.secondary[900]
        },
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100]
        }
    },
    typography:{
        fontFamily: ["Fauna One", "sans-serif"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 48,
        },
        h2: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 36,
        },
        h3: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 20,
        },
        h4: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 14,
        }
    }
})

