import UseRef from "./components/UseRef";
import Portals from "./components/portals";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import Redux from "./components/redux";
function App() {
  return (
    <>
      <UseRef />
      <div id="modal">
        <Portals />
      </div>
      <UseMemo />
      <UseReducer />
      <Redux />
    </>
  );
}

export default App;
