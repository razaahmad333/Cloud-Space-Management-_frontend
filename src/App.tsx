import { Row, Col } from "reactstrap";

import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import MainContent from "@/Components/MainContent";

function App() {
  return (
    <>
      <Header />
      <Row style={{ width: "100vw", padding: "0", margin: "0" }}>
        <Col className="bg-light" md={2}>
          <Sidebar categories={getCategories()} />
        </Col>
        <Col md={10} style={{ margin: "0", padding: "0" }}>
          <MainContent />
        </Col>
      </Row>
    </>
  );
}

export default App;

function getCategories() {
  return [
    {
      label: "Compute Services",
      services: [
        {
          name: "HiDMachine",
          link: "#",
        },
        {
          name: "HiDVPC",
          link: "#",
        },
      ],
    },
    {
      label: "Networking",
      services: [
        {
          name: "HiDVPN",
          link: "#",
        },
        {
          name: "HiDLoadBalancer",
          link: "#",
        },
      ],
    },
    {
      label: "Storage",
      services: [
        {
          name: "HiDS3",
          link: "#",
        },
        {
          name: "HiDEBS",
          link: "#",
        },
      ],
    },
  ];
}
