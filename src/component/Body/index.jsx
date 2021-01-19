import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './Body.scss';
import Chart from './Chart';
import Search from './Search';

import DATA from '../../constants/data.json';
import DATE from '../../constants/DateTime';

Body.propTypes = {

};

function Body(props) {
  const [data, setData] = useState(DATA.data);
  const [change, setChange] = useState(false);

  const [data1, setData1] = useState(DATA.data1);

  function randomDate() {
    const week = DATE
    let date = week[data.length % week.length];
    return date;
  }

  function randomData() {
    return Math.trunc(Math.random() * 100);
  }

  function randomData1() {
    return Math.trunc(Math.random() * 100 + 10);
  }

  const handleAddData = () => {
    let newData = [...data];
    let newData1 = [...data1]

    const newPoint = {
      date: randomDate(),
      quantity: randomData(),
    }
    newData.push(newPoint);
    setData(newData);

    const newPoint1 = {
      date: randomDate(),
      quantity: randomData1(),
    }
    newData1.push(newPoint1);
    setData1(newData1);
  }

  const handleRemoveData = () => {
    const newData = [...data];
    newData.pop();
    setData(newData);

    const newData1 = [...data1];
    newData1.pop();
    setData1(newData1);
  }

  useEffect(() => {
    const useInterval = setInterval(() => {
      if (change) {
        handleAddData();
      }
      else {
        clearInterval(useInterval);
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
        <Chart data={data} data1={data1} />
      </div>
      <div className="footer">
        <Button color="warning" onClick={handleAddData}>Add</Button>
        <Button color="warning" onClick={() => setChange(prevChange => !prevChange)}>{change ? 'Stop' : 'Add Interval'}</Button>
        <Button onClick={handleRemoveData} color="danger">Remove</Button>
      </div>
    </div>
  );
}

export default Body;