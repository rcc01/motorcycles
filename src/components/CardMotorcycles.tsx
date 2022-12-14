import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./styles/style.css";
import axios from "axios";
import Swal from "sweetalert2";

//this is the way we create an OBJECT ARRASY PROPS IN TYPESCRIPT
interface Props {
  setDataModal: any;
  handleCloseModal: any;
  handleOpenModal: any;
  setUpdateList: any;
  updateList: any;
  motorcycle: {
    id: number;
    trademark: string;
    model: number;
    reference: string;
    price: number;
    image: string;
  };
}

const CardMotorcycles: React.FC<Props> = ({
  motorcycle,
  setUpdateList,
  updateList,
  setDataModal,
  handleCloseModal,
  handleOpenModal,
}) => {
  const URL = "http://localhost:3004/motorcycles";

  const handleDelete = async () => {
    Swal.fire({
      title: `Estás seguro de eliminar ${motorcycle.reference} ?`,
      text: "Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sí, Eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URL}/${motorcycle.id}`).then((response) => {
          if (response.status === 200) {
            Swal.fire(
              "Eliminado!",
              `Se eliminó con éxito el registro ${motorcycle.reference}!`,
              "success"
            );
            setUpdateList(!updateList);
          } else {
            Swal.fire(
              "Error!",
              "Hubo un problema al elminar el registro!",
              "error"
            );
          }
        });
      }
    });
  };

  const handleEdit = () => {
    handleOpenModal();
    setDataModal(motorcycle);
  };

  return (
    <div className="col-4 mb-3">
      <Card>
        <Card.Title className="text-center">{motorcycle.reference}</Card.Title>
        <img
          src={motorcycle.image}
          alt={motorcycle.reference}
          className="card-img-top image-card"
        />
        <Card.Body>
          <ListGroup className="mb-2">
            <ListGroupItem>
              <strong>MODELO: </strong>
              {motorcycle.model}
            </ListGroupItem>
            <ListGroupItem>
              <strong>MARCA: </strong>
              {motorcycle.trademark}
            </ListGroupItem>
            <ListGroupItem>
              <strong>PRECIO: </strong>
              {motorcycle.price}
            </ListGroupItem>
          </ListGroup>
          <button className="btn btn-danger me-2" onClick={handleDelete}>
            Eliminar
          </button>
          <button className="btn btn-primary me-2" onClick={handleEdit}>
            Editar
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMotorcycles;
