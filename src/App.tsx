import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useApplicationLoad } from "./boot";

import { HeaderComponent } from "./components/HeaderComponent";
import { Home } from "./pages/Home";
// import { SideMenu } from "./components/SideMenu";
// import { FooterComponent } from "./components/FooterComponent";

import { TodoList } from "./pages/TodoList";

const App = () => {
  const { loading, error, isLoaded } = useApplicationLoad();

  if (loading && !error && !isLoaded) {
    return <div>Loading...</div>;
  }

  return error ? (
    <div>Error: {error}</div>
  ) : (
    <>
      <HeaderComponent />
      {/* <SideMenu /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
      {/* <FooterComponent /> */}
    </>
  );
};

export default App;
