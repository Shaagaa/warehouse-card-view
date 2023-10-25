import React from 'react';
import { styled } from '@mui/system';

const WarehouseCardRoot = styled('div')({
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '@media (max-width: 768px)': {
    padding: '10px',
  },
  
});

const WarehouseCardTitle = styled('h3')({
  fontSize: '20px',
  margin: '10px 0',
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
  textAlign: 'center'
});

const WarehouseCardTitleRed = styled('h3')({
  fontSize: '17px',
  margin: '10px 0',
  '@media (max-width: 768px)': {
    fontSize: '14px',
  },
  textAlign: 'center',
  fontcolor: 'red'
});

const WarehouseCardText = styled('p')({
  fontSize: '16px',
  color: '#555',
  margin: '5px 0',
  '@media (max-width: 768px)': {
    fontSize: '14px',
  },
});

const CapacityBar = styled('div')({
  width: '100%',
  height: '10px',
  backgroundColor: 'lightgray',
  borderRadius: '5px',
});

const FilledCapacity = styled('div')({
  height: '100%',
  borderRadius: '5px',
  backgroundColor: 'green',
});

function WarehouseCard({ name, sort, capacity, available, humidity_level}) {
  // Calculate the percentage of capacity used
  const capacityUsed = (available / capacity) * 100;

  

  return (
    <WarehouseCardRoot>
      <WarehouseCardTitle>{name}</WarehouseCardTitle>
      <WarehouseCardText>Дугаар: {sort}</WarehouseCardText>
      <WarehouseCardText>Сорт: {sort}</WarehouseCardText>
      <WarehouseCardText>Багтаамж: {capacity}</WarehouseCardText>
      <WarehouseCardText>Үлдэгдэл: {available}</WarehouseCardText>
      <WarehouseCardText>Чийг: {humidity_level}</WarehouseCardText>
      <WarehouseCardText>Хогт холц: {humidity_level}</WarehouseCardText>
      <CapacityBar>
        <FilledCapacity style={{ width: `${capacityUsed}%` }} />
      </CapacityBar>
      <WarehouseCardTitleRed>Сэлгэх: {0} өдрийн дараа</WarehouseCardTitleRed>
    </WarehouseCardRoot>
  );
}

export default WarehouseCard;
