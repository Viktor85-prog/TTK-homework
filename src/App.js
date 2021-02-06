import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Posts from "./Components/Posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Contacts />
        <Posts /> */}
          <Route path="/contacts" render={() => <Contacts />} />
          <Route path="/posts" render={() => <Posts />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
