import React from 'react';
import elephant from ".Components/elephant.jpeg";// Update the path to the elephant image

const DataComponent = () => {
  let data = [
    {
      id: 1,
      img: elephant
    },
    {
      id: 2,
      img: elephant
    },
    {
      id: 3,
      img: elephant
    },
    {
      id: 4,
      img: elephant
    }
  ];

  return data;
}

export default DataComponent;