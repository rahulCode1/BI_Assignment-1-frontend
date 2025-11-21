import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header';
import { Link } from 'react-router-dom';

import useFetch from "./useFetch.jsx"
import { useState } from 'react';


function App() {
  const [eventType, setEventType] = useState("All")
  const { data, error, loading } = useFetch('https://bi-assignment-1-backend-lilac.vercel.app/events')
  const events = data?.events
  const filteredEvents = eventType === "All" ? events : events.filter((event) => event.type === eventType)
  console.log(filteredEvents)

  const handleEventFilter = (e) => {

    setEventType(e.target.value)
  }

  return (
    <>
      <Header />

      <main className=' py-3 bg-light '>
        <div className='container min-vh-100 border-top'>
          <div className='py-3 d-flex justify-content-between align-items-center'>
            <div>

              <h1>Meetup Events</h1>
            </div>
            <div>

              <select className='form-select' onChange={handleEventFilter}>
                <option value={"All"}>All Events </option>
                <option value={"Online"}>Online </option>
                <option value={"Offline"}>Offline</option>
                <option value={"Both"}>Both</option>
              </select>
            </div>
          </div>
          <div>
            <div className='row py-3'>

              {loading ? <p>Loading...</p> : error ? <p>Error occurred.</p> : filteredEvents ? filteredEvents.length > 0 && filteredEvents.map((event) => <div className='col-md-4 mb-4' key={event._id}>
                <Link to={`/event/${event._id}`} className='text-decoration-none text-reset'>
                  <div className='card'>

                    <img className='img-fluid object-fit-cover rounded' src={event.image} />
                    <div className='card-img-overlay'>
                      <p><span className='badge text-bg-light  p-2'>{event.type} Event </span></p>
                    </div>
                  </div>
                  <p className='text-secondary'>{event.date}</p>
                  <h3>{event.title}</h3>
                </Link>
              </div>) : <p>No events found</p>}

            </div>
          </div>


     
        </div>
      </main>
    </>
  );
}

export default App;
