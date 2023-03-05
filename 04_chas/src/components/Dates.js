import {useState} from 'react';

export const Dates = () => {

    const [dates,setDates] = useState([]);

    const handleClick = () => {
        let date =  new Date().toString();
        let newDates = [...dates];
        newDates.push(date);
        setDates(newDates);

    }

  return (
    <div>
        {
            dates.map((date, i) => {
                return <p key={i}>{date}</p>
            })
        }
        <button onClick={handleClick}>Add Date</button>
    </div>
  )
}
