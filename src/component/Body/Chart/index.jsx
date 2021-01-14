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
  let fetchDate = data.map(item => item.id);

  return (

    <div className="chart">

      <Line
        data={{
          labels: fetchDate,
          datasets: [
            {
              label: 'Quỹ A',
              data: fetchQuantity,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 3,
            },
            // {
            //   label: 'second week',
            //   data: [20, 30, 10, 8, 40, 10],
            //   backgroundColor: 'rgba(54, 162, 235, 0.2)',
            //   borderColor: 'rgba(54, 162, 235, 1)',
            //   borderWidth: 3,
            // }
          ]
        }}
        options={{
          maintainAspectRatio: false,
        }}
        height={367}
        width={1000}
      />
    </div>
  );
}

export default Chart;