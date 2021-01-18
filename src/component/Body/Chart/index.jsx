import PropTypes from 'prop-types';
import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.scss';


Chart.propTypes = {
  data: PropTypes.array,
};
Chart.defaultProps = {
  data: [],
}

function Chart(props) {

  const { data } = props

  let fetchQuantity = data.map(item => item.quantity);
  let fetchDate = data.map(item => item.date);

  return (

    <div className="chart">

      <Line
        data={{
          labels: fetchDate,
          datasets: [
            {
              label: 'PEPSI',
              data: fetchQuantity,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
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
                labelString: 'Day of week'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Quantity'
              },
              ticks: {
                suggestedMin: 50,
                suggestedMax: 100
              }
            }]
          }
        }}
        height={367}
        width={1000}
      />
    </div>
  );
}

export default Chart;