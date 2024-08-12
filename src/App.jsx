import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Courses, Timing } from "./components/pages";
import { NavContextProvider } from "./components/context/NavContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavContextProvider>
          <Routes>
            <Route exact path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/courses" element={<Courses />} />
              <Route exact path="/timing" element={<Timing />} />
            </Route>
          </Routes>
        </NavContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
