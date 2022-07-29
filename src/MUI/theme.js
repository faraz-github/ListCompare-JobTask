import { createTheme } from "@mui/material";

const theme = createTheme({
    shape: {
        borderRadius: 10
    },
    palette: {
        primary: {
            light: '#ff3382',
            main: '#FF0063',
            dark: '#b20045',
        },
        secondary: {
            light: '#ffffff',
            main: '#FFFFFF',
            dark: '#b2b2b2',
        },
        background: {
            paper: "#EAF6F6"
        }
    },
    typography: {
        fontFamily: "Quicksand",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    }
});

export default theme;