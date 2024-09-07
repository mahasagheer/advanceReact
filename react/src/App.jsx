import UseRef from "./components/UseRef";
import Portals from "./components/portals";
function App() {
  return (
    <>
      <UseRef />
      <div id="modal">
        <Portals />
      </div>
    </>
  );
}

export default App;
