import React from 'react';
import './Legend.scss';

function Legend(props) {
  return (
    <div className="legend">
      <div className="legend__label label__A">
        <div className="legend__label__rectangle"></div>
        <div className="legend__label__title">Quỹ A</div>
      </div>
      <div className="legend__label label__B">
        <div className="legend__label__rectangle"></div>
        <div className="legend__label__title">Quỹ B</div>
      </div>
      <div className="legend__label label__C">
        <div className="legend__label__rectangle"></div>
        <div className="legend__label__title">Quỹ C</div>
      </div>
    </div>
  );
}

export default Legend;