import React, { useState } from "react";
import { addToResource, DBSchema, ResourceType } from "../../firebase/utils";

interface Props {}

const Form = (props: Props) => {
  const [data, setData] = useState<DBSchema>({
    city: "",
    contact: "",
    resource: "",
    type: null!,
    verified: null!,
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.city === "" || data.contact === "" || data.type === null) {
      alert("failed");
      return;
    }
    addToResource(data)
      .then((data) => {
        setSuccess(true);
        setData({
          city: "",
          contact: "",
          resource: "",
          type: null!,
          verified: null!,
        });
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      type: event.target.value as ResourceType,
    }));
  };

  const RadioButton = ({
    text,
    checked,
    onChange,
  }: {
    text: ResourceType | string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        value={text}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label">{text}</label>
    </div>
  );

  const handleInput = (name: any) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {success && (
        <div className="alert alert-success" role="alert">
          Successfully Submited
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          Failed:
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Lead Type</label>
          {([
            "Food",
            "Hospital",
            "Medicines",
            "Oxygen",
            "Plasma",
          ] as ResourceType[]).map((resource, index) => (
            <RadioButton
              key={index}
              checked={data.type == resource}
              onChange={handleRadioChange}
              text={resource}
            />
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">
            Resource Type. (ex Oxygen Refill, Plasma etc.)
          </label>
          <input
            type="text"
            className="form-control"
            value={data.resource}
            onChange={handleInput("resource")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location (City)</label>
          <input
            type="text"
            className="form-control"
            value={data.city}
            onChange={handleInput("city")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            value={data.contact}
            onChange={handleInput("contact")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Verifed Personally?</label>
          <RadioButton
            text="Yes"
            checked={!!data.verified}
            onChange={(event) => {
              setData((prev) => ({ ...prev, verified: true as any }));
            }}
          />
          <RadioButton
            text="No"
            checked={!data.verified}
            onChange={(event) => {
              setData((prev) => ({ ...prev, verified: false as any }));
            }}
          />
        </div>
        {data.verified && (
          <div className="mb-3">
            <label>If yes, then when?</label>
            <div className="mb-3">
              <label>Date</label>
              <input
                type="date"
                name="date"
                onChange={(event) => {
                  setData((prev) => ({
                    ...prev,
                    verified: {
                      ...prev.verified!,
                      date: event.target.value!,
                    },
                  }));
                }}
              />
            </div>
            <div className="mb-3">
              <label>Time</label>
              <input
                type="time"
                onChange={(event) => {
                  setData((prev) => ({
                    ...prev,
                    verified: {
                      ...prev.verified!,
                      time: event.target.value!,
                    },
                  }));
                }}
                name="time"
              />
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
