
import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";
import Front from "./component/front/front";


function App() {
  
  return (
    <div className="App">
       {/* <Router>
       
        <Route exact path="/" component={Join} />
        <Route path="/chat"/>
       
        </Router> */}
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Front/>} />
        <Route path="/Join" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
