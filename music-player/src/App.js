import Player from "./components/Player";

function App() {

  const [songs, setSongs] = useState({
    title : "",
    artist : "",
    img_src : "",
    src : ""
  },
  {
    title : "",
    artist : "",
    img_src : "",
    src : ""
  })

  return (
    <div className="App">
      <Player/>
    </div>
  );
}
export default App;
