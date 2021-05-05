import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

interface Props {}

function Disclaimer({}: Props): ReactElement {
  return (
    <div className="container-fluid d-flex">
      <Helmet>
        <title>Disclaimer - Covid Rakshak</title>
      </Helmet>
      <div
        style={{
          padding: "50px 10px",
        }}
      >
        <strong>
          <h2>Disclaimer</h2>
        </strong>
        <p>
          For all the leads that we are sharing, although we are trying our best
          to verify them individually by our team member or through trusted
          sources, we request patients and their families to use their own
          discretion before availing any such services, especially if they
          include advance payments.
        </p>
        <p>
          Report: <a href="mailto:care@qdient.com">Mail</a>
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;
