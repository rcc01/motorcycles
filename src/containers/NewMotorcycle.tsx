import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

// POST! => it get posted to our fake DB db.json

const NewMotorcycle = () => {
  const navigate = useNavigate();

  const URL = "http://localhost:3004/motorcycles";

  const [data, setData] = useState({
    trademark: "",
    model: "",
    reference: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.post(URL, data);
    if (response.status === 201) {
      Swal.fire(
        "Saved!",
        `The record ${response.data.reference} has bee saved successfully!`
      );
      navigate("/");
    } else {
      Swal.fire("Error!", "There was a problem recording the data!", "error");
    }
  };

  const handleChange = ({ target }: any) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  return (
    <Container>
      <h1 className="text-center" style={{ margin: "1.5rem" }}>
        Request New Product
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="reference"
            placeholder="Referencia"
            value={data.reference}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="model"
            placeholder="Modelo"
            value={data.model}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="price"
            placeholder="Precio"
            value={data.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="image"
            placeholder="URL Image"
            value={data.image}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <select
            className="form-control"
            name="trademark"
            onChange={handleChange}
            required
          >
            <option value="">Choose Brand</option>
            <option value="YAMAHA">YAMAHA</option>
            <option value="SUZUKI">SUZUKI</option>
            <option value="HONDA">HONDA</option>
          </select>
        </Form.Group>
        <button className="btn btn-success">Save</button>
      </Form>
    </Container>
  );
};

export default NewMotorcycle;
