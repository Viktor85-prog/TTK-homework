import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Contacts />
        {/* <Route path="/login" render={() => <Login />} />
        <Route path="/contacts" render={() => <Contacts />} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
