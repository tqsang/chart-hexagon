import React from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import './Search.scss';


Search.propTypes = {

};

function Search(props) {
  return (
    <div className="search">
      <Row>
        <Col sm="auto">
          <Input type="select" name="select" id="select">
            <option>Tất cả các quỹ</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
        <Col sm="auto">
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </Col>
        <Col sm="auto">
          <Button>TRA CỨU</Button>
        </Col>
        <div className="left">
          <Col sm="auto">
            <i class="far fa-chart-bar"></i>
          </Col>
          <Col sm="auto">
            <i class="far fa-calculator"></i>
          </Col>
        </div>

      </Row>
    </div>
  );
}

export default Search;