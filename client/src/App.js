import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./Pages/ContactList/ContactList";
import AddEditContact from "./Pages/AddEditContact/AddEditContact";
import Errors from "./Pages/Errors/Errors";
import NavBar from "./Components/NavBar/NavBar";
// import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route
          path={["/addContact", "/editContact/:id"]}
          component={AddEditContact}
        />
        <Route path="/*" component={Errors}></Route>
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
