import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './Body.scss';
import Chart from './Chart';
import Search from './Search';


Body.propTypes = {

};

function Body(props) {

  const database = [
    {
      "id": 1,
      "quantity": 20
    }, {
      "id": 2,
      "quantity": 45
    }, {
      "id": 3,
      "quantity": 44
    }, {
      "id": 4,
      "quantity": 42
    }, {
      "id": 5,
      "quantity": 8
    }, {
      "id": 6,
      "quantity": 17
    }, {
      "id": 7,
      "quantity": 78
    },
  ]

  const randomData = Math.trunc(Math.random() * 100);
  console.log('random', randomData);

  const [data, setData] = useState(database);

  const handleAddData = () => {
    let newData = [...data];
    const newPoint = {
      id: randomData,
      quantity: randomData,
    }
    newData.push(newPoint);
    setData(newData);

    console.log('123123', newData);

  }

  const handleAddDataInterval = () => {

  }

  const handleRemoveData = () => {
    const newData = [...data];
    newData.pop();

    setData(newData);

  }

  return (
    <div className="s__body">
      <div className="body">
        <Search />
        <Chart data={data} />
      </div>
      <div className="footer">
        <Button onClick={handleAddData}>Add</Button>
        <Button onClick={handleAddDataInterval}>Add Interval</Button>
        <Button onClick={handleRemoveData} color="danger">Remove</Button>
      </div>
    </div>

  );
}

export default Body;