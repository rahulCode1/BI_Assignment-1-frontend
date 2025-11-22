import { useState } from "react";
import Header from "../components/Header";
const AddEvent = () => {
  const initialState = {
    title: "",
    host: "",
    details: "",
    date: "",
    type: "",
    department: "",
    image: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevStat) => ({ ...prevStat, [e.target.id]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:80/event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw "Error occurred while adding new error.";
      }

      const data = await res.json();
      setLoading(true);
      if (data) {
        setFormData(initialState);
        setMessage("New Event added successfully.");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Header />
      <main className="container py-3">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            required
            value={formData.title}
            onChange={handleOnChange}
            className="form-control"
          />
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="text"
            id="image"
            required
            value={formData.image}
            onChange={handleOnChange}
            className="form-control"
          />
          <label htmlFor="host" className="form-label">
            Hosted by:
          </label>
          <input
            type="text"
            id="host"
            required
            onChange={handleOnChange}
            value={formData.host}
            className="form-control"
          />
          <label htmlFor="details" className="form-label">
            Details:
          </label>
          <textarea
            type="text"
            id="details"
            required
            onChange={handleOnChange}
            value={formData.details}
            className="form-control"
          />
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="datetime-local"
            id="date"
            required
            onChange={handleOnChange}
            value={formData.date}
            className="form-control"
          />
          <label htmlFor="type" className="form-label">
            Event Type:
          </label>
          <select
            id="type"
            required
            onChange={handleOnChange}
            value={formData.type}
            className="form-select"
          >
            <option value="">Select event </option>
            <option value={"Offline"}>Offline </option>
            <option value={"Online"}>Online </option>
            <option value={"Both"}>Both </option>
          </select>
          <label htmlFor="type" className="form-label">
            Department:
          </label>
          <select
            id="department"
            required
            onChange={handleOnChange}
            value={formData.department}
            className="form-select"
          >
            <option value="">Select department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="IT">IT</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
            <option value="Electronics">Electronics</option>
            <option value="MBA">MBA</option>
            <option value="BBA">BBA</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Sports">Sports</option>
          </select>

          <br />
          <button className="btn btn-primary" type="submit">
            {loading ? "Eventing adding..." : "Add event"}
          </button>
        </form>
        <p>{message}</p>
      </main>
    </>
  );
};

export default AddEvent;
