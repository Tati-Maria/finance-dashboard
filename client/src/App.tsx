import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { themeSettings } from "./theme";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import Dashboard from "@/scenes/dashboard";
import Predictions from "./scenes/predictions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/predictions",
        element: <Predictions />
      }
    ]
  }
]);

function App() {
  //happens once on first render
  const theme = useMemo(() => createTheme(themeSettings)  ,[])

  //Cssbaseline is a component that resets the css
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

export default App
