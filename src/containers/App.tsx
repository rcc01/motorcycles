import "./App.css";
import { Container } from "react-bootstrap";
import ListMotorcycles from "../components/ListMotorcycles";

const App = () => {
  return (
    <Container fluid>
      <h1 className="product-list">Product List</h1>
      <ListMotorcycles />
    </Container>
  );
};

export default App;
