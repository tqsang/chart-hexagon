import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './Body.scss';
import Chart from './Chart';
import Search from './Search';

import DATA from '../../constants/data.json';


Body.propTypes = {

};

function randomDate() {
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const randomIndex = Math.trunc(Math.random() * 7);

  return week[randomIndex]

  // const newDate = [...DATA.data];

  // const dayOfWeek = week[week.length % newDate.length];

  // newDate.push(dayOfWeek);

  // console.log('123', DATA.data.length);

  // return dayOfWeek;


}

function randomData() {
  return Math.trunc(Math.random() * 100);
}

function Body(props) {

  const [data, setData] = useState(DATA.data);
  const [change, setChange] = useState(false);

  const handleAddData = () => {
    let newData = [...data];
    const newPoint = {
      date: randomDate(),
      quantity: randomData(),
    }
    newData.push(newPoint);
    setData(newData);
  }

  const handleRemoveData = () => {
    const newData = [...data];
    newData.pop();

    setData(newData);

  }

  useEffect(() => {
    const useInterval = setInterval(() => {
      if (change) {
        handleAddData();
      }

    }, 1000);

    return () => {
      clearInterval(useInterval);
    }
  });

  return (
    <div className="s__body">
      {console.log(data)}
      <div className="body">
        <Search />
        <Chart data={data} />
      </div>
      <div className="footer">
        <Button onClick={handleAddData}>Add</Button>
        <Button onClick={() => setChange(prevChange => !prevChange)}>Add Interval</Button>
        <Button onClick={handleRemoveData} color="danger">Remove</Button>
      </div>
    </div>

  );
}

export default Body;