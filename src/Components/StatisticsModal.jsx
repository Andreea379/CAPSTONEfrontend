import { Button, Modal } from "react-bootstrap";
import Calendar from "./Calendar";

const StatisticsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <div className="mx-auto">
          <Modal.Title
            style={{ color: " rgb(246, 157, 75)" }}
            className="fw-bold"
          >
            Statistics
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body>
        <Calendar />
      </Modal.Body>
    </Modal>
  );
};
export default StatisticsModal;
