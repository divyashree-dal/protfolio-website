import { useState } from "react";
import UseMediaQuery from "./hooks/UseMediaQuery";
import NavBar from "./components/NavBar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");

  return (
    <>
      <div className="flex h-screen">
      <div className="h-full">
          <NavBar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
