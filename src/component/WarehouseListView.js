import React, { useState, useEffect } from 'react';
import './WarehouseListView.css';
import WarehouseCard from './WarehouseCard';
import backgroundImg from './back.png';
import '../App.css';
import axios from 'axios';


const branch = {
  '0': 'Бүх салбарууд',
  '1': 'Алтанговь',
  '2': 'Гүүрэн кран',
  '3': 'Ерөө',
  '4': 'Жаргалант',
  '5': 'Зулзага',
  '6': 'Зэлтэр',
  '7': 'Сайхантолгой',
  '8': 'СТМАА',
  '9': 'Төв жаргалант',
  '10': 'Хонгор',
  '11': 'Хөтөл Номгон',
  '12': 'Хушаат',
  '13': 'Шаамар',
  '14': 'Шаргал',
  '15': 'Дархан'
};


const branchArray = Object.entries(branch);

const containerStyle = {
  backgroundImage: `url(${backgroundImg})`,
};



function WarehouseListView() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [warehouses, setWarehouses] = useState([])
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count: ${count}`);
    async function fetchData() {
      try {
        const url = 'http://127.0.0.1:8017/api/v1/angor';
        const response = await axios.post(url);
        console.log('Response Data:', response.data.result);
        setWarehouses(response.data.result)
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, [count]); // This effect will run whenever 'count' changes

  // fetchData();
  
  const groupedWarehouses = warehouses.reduce((groups, warehouse) => {
    const location = warehouse.branch_type;
    if (!groups[location]) {
      groups[location] = [];
    }
    groups[location].push(warehouse);
    return groups;
  }, {});
 

  const handleCardClick = (index) => {
    console.log(index)
    setSelectedCard(index);
  };

  const branch_data = {
    'altangovi': 'Алтанговь',
    'guuren': 'Гүүрэн кран',
    'eroo': 'Ерөө',
    'jargalant': 'Жаргалант',
    'zulzaga': 'Зулзага',
    'zelter': 'Зэлтэр',
    'st': 'Сайхантолгой',
    'stmaa': 'СТМАА',
    'tovjargalant': 'Төв жаргалант',
    'hongor': 'Хонгор',
    'hotolnomgon': 'Хөтөл Номгон',
    'hushaat': 'Хушаат',
    'shaamar': 'Шаамар',
    'shargal': 'Шаргал',
    'darkhan': 'Дархан'
  }
  
  return (
    <div className="app" style={containerStyle}>
      {/* <h1 className='headertext'>Ангорын жагсаалтууд</h1> */}
      <div className="vertical-card-view">
        {branchArray.map((item) => (
          <div
            className={`card ${selectedCard === item[0] ? 'green-card' : ''}`}
            key={item[0]}
            onClick={() => handleCardClick(item[0])}
          >
            <h3>{item[1]}</h3>
          </div>
        ))}
      </div>
    
    <div className="grouped-warehouse-view">
      {Object.entries(groupedWarehouses).map(([location, warehouses]) => (
        <div key={location} className="location-section">
          <h2 className="location-title">{branch_data[location]}</h2>
          <div className="grid-container">
            {warehouses.map((warehouse) => (
              <WarehouseCard
                key={warehouse.id}
                name={warehouse.sw_name}
                sort={warehouse.cs_name}
                capacity={warehouse.capacity}
                available={warehouse.end_balance/1000}
                humidity_level={warehouse.humidity_level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}



export default WarehouseListView;