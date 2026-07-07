import { useState } from 'react';
const Vacations = () => {
const [vacation] = useState({start_date: '', end_date: '', destination: ''});
const {start_date, end_date, destination} = vacation;

  return(
    <div>
      <div>
        <h1>My Vacations</h1>
        <ul>
            <li>Start Date: {start_date}</li>
            <li>End Date: {end_date}</li>
            <li>Destination: {destination}</li>
        </ul>
      </div>
    </div>
  );
}

export default Vacations;