import React from 'react';
import './Search.scss';
import { Input, Button } from 'reactstrap';


Search.propTypes = {

};

function Search(props) {
  return (
    <div className="background">
      <div className="search">
        <div className="search__input-item search__input-option">
          <Input
            type="select"
            name="select"
            id="select">
            <option>Tất cả các quỹ</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </div>
        <div className="search__input-item search__input-date">
          <Input
            type="date"
            name="date"
            id="date"
            defaultValue="2020-01-20"
          ></Input>
        </div>
        <Button className="search__input-item search__btn-search" color="link" onClick={() => alert("just only UI -__-")}>TRA CỨU</Button>
        <div className="search__input-item search__icon">
          <i class="far fa-chart-bar"></i>
          <i class="fas fa-calculator"></i>
        </div>
      </div>
    </div>

  );
}

export default Search;