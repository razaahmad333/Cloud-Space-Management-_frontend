import { Container, Row, Col, Input } from "reactstrap";
import logo from "../assets/react.svg";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <Container
      className="py-3 bg-dark"
      fluid
      style={{
        width: "100vw",
      }}
    >
      <Row className="align-items-center">
        <Col>
          <img
            onClick={() => {
              window.location.href = "/";
            }}
            src={logo}
            alt="Company Logo"
          />
        </Col>
        <Col className="text-center">
          <Input
            className="input"
            type="text"
            placeholder="Search Cloud Services"
          />
        </Col>
        <Col className="d-flex justify-content-end">
          <BiUserCircle size={30} style={{ color: "white" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
