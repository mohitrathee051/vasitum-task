import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Content from "./components/content.jsx";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Topbar />
      <Content />
    </div>
  );
}

export default App;
