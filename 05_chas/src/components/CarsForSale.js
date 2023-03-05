import PropTypes from 'prop-types';
import { useState } from 'react';

const CarsForSale = ({userBuy,setUserBuy}) => {
  const [input, setInput] = useState('');
  const [carPark, setCarPark] = useState(['BMW','Audi', 'Ford']);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    if(!input) return
    setCarPark([...carPark, input])
    setInput('')
  }

  const handleBuy = (item) => {
    setUserBuy([...userBuy, item])
  }
  return (
    <div>
      <h2>Cars for sale</h2>

      <input
       type="text"
       placeholder='Enter new brand'
       value={input}
       onChange={handleChange}
      />

      <button
        onClick={handleClick}
      >Add New</button>

      <ol>
        {carPark && carPark.map((car,i) =>
          <li key={i}>
            <span>{car}</span>
            <button onClick={() => handleBuy(car)}>Buy</button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default CarsForSale

CarsForSale.propTypes = {
  userBuy: PropTypes.arrayOf(PropTypes.string).isRequired,
  setUserBuy: PropTypes.func.isRequired
}