import React, { ReactElement, useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext, signOut } from "../../AuthContext";
import Form from "./Form";
import LoginHandler from "./Login";

interface Props {}

function SubmitLeads({}: Props): ReactElement {
  const { user } = useContext(AuthContext);

  const handleSignout = () => {
    signOut()
      .then((data) => {
        alert("LogOUT successfully!");
      })
      .catch(() => {
        alert("failed to log you out!");
      });
  };

  return (
    <div className="container-fluid d-flex">
      <Helmet>
        <title>Submit Leads - Covid Rakshak</title>
      </Helmet>
      <div
        style={{
          padding: "50px 0px",
          width: "100%",
        }}
      >
        {!user ? (
          <LoginHandler />
        ) : (
          <>
            <strong>
              <h2>Submit Leads</h2>
            </strong>
            <img
              src={user.photoURL!}
              className="rounded-circle"
              alt={user.displayName!}
            />
            Hello {user.displayName}
            <br />
            <button
              type="button"
              onClick={handleSignout}
              className="btn btn-primary"
            >
              Log Out
            </button>
            <Form />
          </>
        )}
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf5HxY3uZPrHRP-2Qmp5lSiQL3xqFDJAa8qksQn71bsLQgvBQ/viewform?embedded=true"
          width="100%"
          height="1600px"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe> */}
      </div>
    </div>
  );
}

export default SubmitLeads;
