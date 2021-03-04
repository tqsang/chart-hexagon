import React, { useState } from 'react';
import './Search.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import DATA from '../../../constants/data.json';

import Dropdown from '../../../assets/images/Shape.svg';
import IconDate from '../../../assets/images/Vector.svg';
import PropTypes from 'prop-types';

Search.propTypes = {
  onChangeLabel: PropTypes.func,
  onChangeDate: PropTypes.func,
};

Search.defaultProps = {
  onChangeLabel: null,
  onChangeDate: null,
}

function Search(props) {
  const { onChangeLabel, onChangeDate } = props ?? {}

  const lastDate = DATA.database.child[0].data.slice(-1)[0].date;

  const [change, setChange] = useState(DATA.database.name);
  const [showLabel, setShowLabel] = useState(true);
  const [showDatePicker, setShowPicker] = useState(true);
  const [startDate, setStartDate] = useState(new Date('01/01/2021'));
  const [endDate, setEndDate] = useState(new Date(moment(lastDate, 'MM/DD/YYYY').add('days', 1).format('MM/DD/YYYY')));

  const handleSearch = () => {
    onChangeDate(startDate, endDate);
    onChangeLabel(change);
  }

  const showDate = (newDate) => {
    const dateObj = new Date(newDate);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    newDate = `${month}/${day}/${year}`;

    return newDate
  }

  return (
    <div className="background">
      {!showLabel && <div className="close1" onClick={() => setShowLabel(pre => !pre)}></div>}
      <div className="search">
        <div
          className="search__input-item search__input-option"
          onClick={() => setShowLabel(pre => !pre)}
        >
          <ul className="select">
            <p>{change}</p>
            {
              <>
                <li
                  className={DATA.database.name === change ? 'active' : ''}
                  style={showLabel ? { display: 'none' } : { display: 'block' }}
                  onClick={() => {
                    setChange(DATA.database.name);
                    onChangeLabel(DATA.database.name);
                  }}
                >{DATA.database.name}</li>
                {
                  DATA.database.child.map((item, index) => (
                    <li
                      className={item.name === change ? 'active' : ''}
                      style={showLabel ? { display: 'none' } : { display: 'block' }}
                      key={index}
                      onClick={() => {
                        setChange(item.name);
                        onChangeLabel(item.name)
                      }}
                    >
                      {item.name}
                    </li>
                  ))
                }
              </>
            }
          </ul>
          <div className="icon__dropdown">
            <img src={Dropdown} alt="drop down" />
          </div>
        </div>
        <div className="search__input-item search__input-date">
          <p>{showDate(startDate)} - {showDate(moment(endDate, 'MM/DD/YYYY').add('days', 1).format('MM/DD/YYYY'))}</p>

          <div className="icon__date" onClick={() => setShowPicker(pre => !pre)}>
            <img src={IconDate} alt="date picker" />
          </div>

        </div>
        <button
          className="search__input-item search__btn-search"
          onClick={handleSearch}
        >TRA CỨU
        </button>
        <div className="search__input-item search__icon">
          <svg id="Group_1" data-name="Group 1" xmlns="http://www.w3.org/2000/svg" width="27.701" height="28" viewBox="0 0 27.701 28">
            <path id="Path_1" data-name="Path 1" d="M16.427,16.341H11.28a.78.78,0,0,0-.78.78v10.1a.78.78,0,0,0,.78.78h5.147a.78.78,0,0,0,.78-.78v-10.1A.78.78,0,0,0,16.427,16.341Zm-.78,10.1H12.06V17.9h3.587Z" fill="#e87722" />
            <path id="Path_2" data-name="Path 2" d="M26.642,10.218H21.456a.78.78,0,0,0-.78.78V27.219a.78.78,0,0,0,.78.78h5.186a.78.78,0,0,0,.78-.78V11A.78.78,0,0,0,26.642,10.218Zm-.78,16.221H22.236V11.778h3.626Z" fill="#e87722" />
            <path id="Path_3" data-name="Path 3" d="M6.248,20.123H1.062a.78.78,0,0,0-.78.78V27.22a.78.78,0,0,0,.78.78H6.248a.78.78,0,0,0,.78-.78V20.9A.78.78,0,0,0,6.248,20.123Zm-.78,6.317H1.842V21.683H5.468Z" fill="#e87722" />
            <path id="Path_4" data-name="Path 4" d="M27.5.782a.663.663,0,0,0-.507-.273L19.9,0a.782.782,0,1,0-.117,1.56L24.8,1.9,15.568,9.127,8.51,3.59A.78.78,0,0,0,7.5,3.629L.243,10.569A.78.78,0,0,0,.2,11.661a.7.7,0,0,0,.585.273.78.78,0,0,0,.546-.234L8.081,5.227l6.98,5.5a.78.78,0,0,0,.975,0l9.983-7.768L25.628,7.8a.819.819,0,0,0,.741.819h.039a.78.78,0,0,0,.78-.7l.507-6.59A.624.624,0,0,0,27.5.782Z" fill="#e87722" />
          </svg>
          <svg id="Group_2" data-name="Group 2" xmlns="http://www.w3.org/2000/svg" width="24.302" height="28" viewBox="0 0 24.302 28">
            <path id="Path_5" data-name="Path 5" d="M21.265,28H3.038A2.983,2.983,0,0,1,0,25.083V2.917A2.983,2.983,0,0,1,3.038,0H21.265A2.983,2.983,0,0,1,24.3,2.917V25.083A2.983,2.983,0,0,1,21.265,28ZM3.038,1.167a1.79,1.79,0,0,0-1.823,1.75V25.083a1.79,1.79,0,0,0,1.823,1.75H21.265a1.79,1.79,0,0,0,1.823-1.75V2.917a1.79,1.79,0,0,0-1.823-1.75Z" fill="#0a3b32" />
            <path id="Path_6" data-name="Path 6" d="M20.049,24.5H4.252a.6.6,0,0,1-.608-.583v-14a.6.6,0,0,1,.608-.583h15.8a.6.6,0,0,1,.608.583v14A.6.6,0,0,1,20.049,24.5ZM4.86,23.333H19.441V10.5H4.86Z" fill="#0a3b32" />
            <path id="Path_7" data-name="Path 7" d="M9.115,24.5a.6.6,0,0,1-.608-.583v-14a.608.608,0,0,1,1.215,0v14A.6.6,0,0,1,9.115,24.5Z" fill="#0a3b32" />
            <path id="Path_8" data-name="Path 8" d="M20.049,14H4.252a.584.584,0,1,1,0-1.167h15.8a.584.584,0,1,1,0,1.167Z" fill="#0a3b32" />
            <path id="Path_9" data-name="Path 9" d="M20.049,17.5H4.252a.584.584,0,1,1,0-1.167h15.8a.584.584,0,1,1,0,1.167Z" fill="#0a3b32" />
            <path id="Path_10" data-name="Path 10" d="M20.049,21H4.252a.584.584,0,1,1,0-1.167h15.8a.584.584,0,1,1,0,1.167Z" fill="#0a3b32" />
          </svg>
        </div>
      </div>
      <div className="body-date-picker">
        <div className={showDatePicker ? "disable" : 'date-picker'}>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            inline
          />
          <div className="end">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              inline
            />
            <button className="btn-ok" onClick={() => setShowPicker(pre => !pre)}>OK</button>
          </div>

        </div>
      </div>
    </div >

  );
}

export default Search;