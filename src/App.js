import "./App.css";
import Directory from "./components/DirectoryComponents";
import { Navbar, NavbarBrand } from 'reactstrap';


function App() {
  return <div className="App">
    <Navbar dark color="primary">
        <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
        </div>
      </Navbar>
      <Directory  />
  </div>;
}

export default App;
