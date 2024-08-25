import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Courses, Timing, Error404 } from "./components/pages";
import { NavContextProvider } from "./components/context/NavContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/enroll/:title" element={<Courses />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </NavContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
