import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const {darkMode} = useContext(ThemeContext);

  const applyStyle = darkMode ? "app dark" : "app"

  return (
    <div className={applyStyle}> <h1> <Navbar/></h1>
    <div className="wrapper">
      Routes
    </div>
    </div>
    
  )
}

export default App
