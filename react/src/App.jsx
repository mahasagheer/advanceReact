import UseRef from "./components/UseRef";
import Portals from "./components/portals";
import UseMemo from "./components/UseMemo";
function App() {
  return (
    <>
      <UseRef />
      <div id="modal">
        <Portals />
      </div>
      <UseMemo />
    </>
  );
}

export default App;
