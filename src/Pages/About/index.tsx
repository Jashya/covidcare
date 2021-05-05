import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

interface Props {}

function About({}: Props): ReactElement {
  return (
    <div className="container-fluid d-flex">
      <Helmet>
        <title>About - Covid Rakshak</title>
      </Helmet>
      <div
        style={{
          padding: "50px 10px",
        }}
      >
        <strong>
          <h2>About Us</h2>
        </strong>
        <p>
          CovidRakshak is an online portal created to provide latest and
          verified resources to the people in need. It is our small initiative
          to help people in this crisis.
        </p>
        <p>
          <strong>Developed by:</strong>{" "}
          <a
            href="http://github.com/w3Abhishek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek Verma
          </a>{" "}
          and{" "}
          <a
            href="http://github.com/piyushsuthar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Piyush Suthar
          </a>
        </p>
        <p>
          In Association with{" "}
          <strong>
            <a
              href="https://srijankasankalp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Srijan Ek Soch
            </a>
          </strong>
        </p>
        <p>
          All the leads provided here is personally verified by the COVID Task
          Force of Srijan Ek Soch. Our volunteers are working 24*7 to help
          people in this health crisis.
        </p>
        <p>
          Send Feedback: <a href="mailto:care@qdient.com">Mail</a>
        </p>
      </div>
    </div>
  );
}

export default About;
