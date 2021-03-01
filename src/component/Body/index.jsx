import React, { useEffect, useState } from 'react';
import './Body.scss';
import Chart from './Chart';
import Search from './Search';

import DATA from '../../constants/data.json';
import { nextDate } from '../../constants/DateTime';

Body.propTypes = {

};

function Body(props) {

  const [change, setChange] = useState(false);
  const [data, setData] = useState(DATA.database.child);

  function randomData() {
    return Math.trunc(Math.random() * 100);
  }

  const handleAddData = () => {
    const dataSample = data[0];
    const lastDate = dataSample.data[dataSample.data.length - 1].date;

    const addData = data.map((item) =>
    ({
      name: item.name,
      data: [
        ...item.data,
        {
          date: nextDate(lastDate),
          quantity: randomData(),
        }
      ]
    })
    )
    setData(addData);
  }

  const handleRemoveData = () => {
    const removeData = data.map(item => {
      item.data.pop()
      return item
    })
    setData([...removeData]);
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

  const handleChangeName = (e) => {
    console.log(e.name);
    const filter = DATA.database.child.filter((item) => item.name === e.name);
    setData(filter);
  }

  const handleChangeDate = () => {

  }

  const handleSearch = () => {
    handleChangeName();
  }


  return (
    <div className="s__body">
      <div className="body">
        <Search onChangeName={handleChangeName} onChangeDate={handleChangeDate} handleSearch={handleSearch} />
        <Chart data={data} />
      </div>
      <div className="footer">
        <button className={`btn ${change ? 'disabled' : ''}`} onClick={handleAddData}>Add</button>
        <button className="btn" onClick={() => setChange(prevChange => !prevChange)}>{change ? 'Stop' : 'Add Interval'}</button>
        <button className={`btn ${change ? 'disabled' : ''}`} onClick={handleRemoveData} color="danger">Remove</button>
      </div>
    </div>
  );
}

export default Body;