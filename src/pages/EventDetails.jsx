import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

const EventDetails = () => {
  const eventId = useParams().id;
  const { data, error, loading } = useFetch(
    `http://localhost:80/events/${eventId}`
  );
  const event = data?.event;

  return (
    <>
      <Header />
      <main className="bg-light py-3 ">
        <div className="container border-top">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error occurred.</p>
          ) : event ? (
            <section className="container container-fluid py-5 d-flex justify-content-between gap-5">
              <div className="">
                <h1>{event.title} </h1>
                <p className="m-0">Hosted by: </p>
                <h4 className="mb-4">{event.department}</h4>
                <img
                  src={event.image}
                  className="img-fluid rounded mb-4"
                  style={{ width: "500px" }}
                />
                <h5>Details: </h5>
                <p style={{ width: "500px" }}>{event.details}</p>
                <h5>Additional information</h5>
                <div>
                  <p>
                    <strong>Dress Code:</strong> Smart casual
                  </p>
                  <p>
                    <strong>Age Restrictions:</strong> 18 and above
                  </p>
                  <h4>Event Tags: </h4>
                  <p>
                    <span className="badge text-bg-danger px-2 py-1 mx-2 fs-6">
                      marketing
                    </span>
                    <span className="badge text-bg-danger px-2 py-1 mx-2 fs-6">
                      digital
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="bg-white p-4 rounded p-2 mb-5"
                  style={{ width: "400px" }}
                >
                  <div className="my-2">
                    <p className="m-0">Mon Nov 22 2025 at 10:00:00 AM to</p>
                    <p className="m-0">Mon Nov 22 2025 at 12:00:00 PM </p>
                  </div>

                  <div className="my-2">
                    <p className="m-0">Marketing City </p>
                    <p className="m-0">789 Marketing Avenue, City </p>
                  </div>
                  <p> &#8377; 5,000 </p>
                </div>
                <h4 className="my-3">Speakers (2) </h4>
                <div className="text-center">
                  <div
                    className="d-flex gap-3 rounded"
                    style={{ width: "400px" }}
                  >
                    <div className="bg-white p-2 w-100 text-center rounded">
                      <img
                        src="https://media.istockphoto.com/id/1490901345/photo/happy-male-entrepreneur-at-his-office-desk-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YUcA7EJpGx9CS0SEVJyU0jH6yB9GaUKAOUp98YmBzi0="
                        alt="Alice Johnson"
                        className="object-fit-cover rounded-circle mb-2"
                        style={{ width: "70px", height: "70px" }}
                      />
                      <h5>Alice Johnson </h5>
                      <p>Marketing Manager</p>
                    </div>
                    <div className="bg-white p-2 w-100 text-center rounded">
                      <img
                        src="https://img.freepik.com/free-photo/portrait-smiling-technician-data-center-monitoring-system-performance_482257-125692.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Micheal Brown"
                        className="object-fit-cover rounded-circle mb-2"
                        style={{ width: "70px", height: "70px" }}
                      />
                      <h5>Michael Brown </h5>
                      <p>SEO Specialist</p>
                    </div>
                  </div>
                  <p className=" my-3">
                    <span className="badge text-bg-danger py-2 px-5 fs-5">RSVP</span>{" "}
                  </p>
                </div>
              </div>
            </section>
          ) : (
            <p>No event found.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default EventDetails;
