import UseRef from "./components/UseRef";
import Portals from "./components/portals";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
function App() {
  return (
    <>
      <UseRef />
      <div id="modal">
        <Portals />
      </div>
      <UseMemo />
      <UseReducer />
    </>
  );
}

export default App;
