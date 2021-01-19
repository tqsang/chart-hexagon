import PropTypes from 'prop-types';
import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.scss';

Chart.propTypes = {
  data: PropTypes.array,
  data1: PropTypes.array,

};
Chart.defaultProps = {
  data: [],
  data1: [],

}

function Chart(props) {

  const { data, data1 } = props

  let fetchQuantity = data.map(item => item.quantity);
  let fetchDate = data.map(item => item.date);

  let fetchQuantity1 = data1.map(item => item.quantity);

  return (

    <div className="chart">

      <Line
        data={{
          labels: fetchDate,
          datasets: [
            {
              label: 'Quỹ A',
              data: fetchQuantity,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 3,
            },
            {
              label: 'Quỹ B',
              data: fetchQuantity1,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 3,
            },
          ]
        }}

        options={{
          responsive: true,
          maintainAspectRatio: false,

          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Quantity'
              },
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }}
        height={367}
        width={1000}
      />
    </div>
  );
}

export default Chart;