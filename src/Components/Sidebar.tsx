import React from "react";
import { Collapse } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import { BsChevronRight } from "react-icons/bs";

interface IProps {
  categories: Array<{
    label: string;
    services: Array<{
      name: string;
      link: string;
    }>;
  }>;
}

export default function Sidebar({ categories }: IProps) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "1rem",
        height: "88vh",
      }}
    >
      {categories.map((category, index) => (
        <div key={index}>
          <div
            className="d-flex justify-content-between align-items-center px-3 py-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/category`);
            }}
          >
            <h6 className="m-0">{category.label}</h6>
            <span className="icon">
              <BsChevronRight />
            </span>
          </div>
          <Collapse isOpen>
            <ul className="list-group list-group-flush">
              {category.services.map((service, index) => (
                <li key={index} className="list-group-item">
                  {service.name}

                  <Link
                    to={`/service/${service.name}`}
                    className="stretched-link"
                  />
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
