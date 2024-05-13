import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Cards from "./components/Cards";
import { ThemeProvider } from "./contexts/Theme";
import {useState, useEffect} from "react";


function App() {
  const [themeMode, setThemeMode] = useState("light");

  // since lightTheme and Dark theme are two methods but their functionality is not defined, we can make methods of the same name here and add there funcitonality


  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark"); 
  }

  // actual change of theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Cards/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
