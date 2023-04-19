import {
    Palette,
    PaletteColor
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}


/*
    What is happening here?
    We are extending the Palette interface from @mui/material/styles/createPalette
    to include a new property called terciary.
    We are also extending the PaletteColor interface to include a new property called [key: number]: string
    This is to allow us to use the PaletteColor interface as a type for the terciary property.
 */