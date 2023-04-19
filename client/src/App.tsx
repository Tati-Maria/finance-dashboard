import { useMemo } from "react"
import { Box } from "@mui/material"
import { CssBaseline, ThemeProvider } from "@mui/material"
import {createTheme} from "@mui/material/styles"
import { themeSettings } from "./theme";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import Dashboard from "@/scenes/dashboard";
import Predictions from "./scenes/predictions";
import Home from "@/scenes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
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
