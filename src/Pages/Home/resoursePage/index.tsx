import React, { ReactElement, useEffect, useState } from "react";
import Card from "../../../Components/Card";
import Container from "../../../Components/Container";
import Spinner from "../../../Components/LoadingSpinner";
import {
  DBSchema,
  getAllResource,
  getResourceByCategory,
  ResourceType,
} from "../../../firebase/utils";
import Helmet from "react-helmet";

interface Props {
  type: ResourceType | "Mixed";
}

function ResourcePage({ type }: Props): ReactElement {
  const [data, setData] = useState<DBSchema[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (type === "Mixed") {
      getAllResource().then((data) => {
        setData(data);
        setLoading(false);
      });
    } else {
      getResourceByCategory(type).then((data) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [type]);
  return (
    <>
      <Helmet>
        <title>
          {type === "Mixed" ? "Covid Rakshak" : `${type} - Covid Rakshak`}
        </title>
      </Helmet>
      <Container>
        {loading ? (
          <Spinner></Spinner>
        ) : data.length === 0 ? (
          <h2>No Data</h2>
        ) : (
          data.map((data, index) => (
            <Card
              key={index}
              type={data.type}
              resource={data.resource}
              city={data.city}
              verified={data.verified}
              contact={data.contact}
            />
          ))
        )}
      </Container>
    </>
  );
}

export default ResourcePage;
