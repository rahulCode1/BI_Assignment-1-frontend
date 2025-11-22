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
    tags: [],
  };
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevStat) => ({ ...prevStat, [e.target.id]: e.target.value }));
  };

  const handleCheckbox = (e) => {
    const { value } = e.target;
    setFormData((prevStat) => {
      if (prevStat.tags.includes(value)) {
        return {
          ...prevStat,
          tags: prevStat.tags.filter((tag) => tag !== value),
        };
      } else {
        return { ...prevStat, tags: [...prevStat.tags, value] };
      }
    });
  };

  console.log(formData);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://bi-assignment-1-backend-five.vercel.app/event`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw "Error occurred while adding new error.";
      }

      const data = await res.json();
      setLoading(false);

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
        <form onSubmit={handleFormSubmit} className="p-3">
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

          <label className="form-label">Tags:</label>

          <div className="d-flex flex-wrap gap-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Marketing"
                id="marketing"
                onChange={handleCheckbox}
                checked={formData.tags.includes("Marketing")}
              />
              <label className="form-check-label" htmlFor="marketing">
                Marketing
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Digital"
                id="digital"
                onChange={handleCheckbox}
                checked={formData.tags.includes("Digital")}
              />
              <label className="form-check-label" htmlFor="digital">
                Digital
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Sales"
                id="sales"
                onChange={handleCheckbox}
                checked={formData.tags.includes("Sales")}
              />
              <label className="form-check-label" htmlFor="sales">
                Sales
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Finance"
                id="finance"
                onChange={handleCheckbox}
                checked={formData.tags.includes("Finance")}
              />
              <label className="form-check-label" htmlFor="finance">
                Finance
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="HR"
                id="hr"
                onChange={handleCheckbox}
                checked={formData.tags.includes("HR")}
              />
              <label className="form-check-label" htmlFor="hr">
                HR
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Design"
                id="design"
                onChange={handleCheckbox}
                checked={formData.tags.includes("Design")}
              />
              <label className="form-check-label" htmlFor="design">
                Design
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Tech"
                id="tech"
                onChange={handleCheckbox}
                checked={formData.tags.includes("Tech")}
              />
              <label className="form-check-label" htmlFor="tech">
                Tech
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Support"
                id="support"
                onChange={handleCheckbox}
                checked={formData.tags.includes("Support")}
              />
              <label className="form-check-label" htmlFor="support">
                Support
              </label>
            </div>
          </div>
          <br />
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
