import PropTypes from 'prop-types';
import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.scss';
import Legend from './Legend';
import colorLineChart from '../../../constants/colorLine.json';

Chart.propTypes = {
  data: PropTypes.array,
  onChangeChart: PropTypes.func,
};
Chart.defaultProps = {
  data: [],
  onChangeChart: null,
}

function Chart(props) {

  const { data } = props ?? {};

  let fetchDate = data[0].data.map(item => item.date);

  let fetchData = data.map((item, index) => {
    const lineColor = index < colorLineChart.colors.length
      ? colorLineChart.colors[index]
      : colorLineChart.colorsDefault;
    return {
      label: item.name,
      data: item.data.map(item => item.quantity),
      backgroundColor: lineColor.backgroundColor,
      borderColor: lineColor.borderColor,
      borderWidth: 2,
      lineTension: 0,
      pointHoverBorderWidth: 15,
      pointHoverBorderColor: lineColor.pointHoverBorderColor,
      pointBackgroundColor: lineColor.pointBackgroundColor,
    }
  });
  return (
    <>
      <Legend />
      <div className="chart">
        <Line
          data={{
            labels: fetchDate,
            datasets: fetchData,
          }}

          options={{
            responsive: true,
            maintainAspectRatio: false,

            scales: {
              xAxes: [{
                display: true,

                ticks: {
                  fontColor: '#0A3B32',
                  fontSize: 16,
                  fontFamily: 'FWDCircularVietTT-Book',
                  padding: 15,
                }


              }],
              yAxes: [{
                display: true,

                ticks: {
                  beginAtZero: true,

                  fontColor: '#0A3B32',
                  fontSize: 16,
                  fontFamily: 'FWDCircularVietTT-Book',
                  padding: 29,
                }
              }],
            },
            legend: {
              display: false,
              labels: {
                fontColor: '#0A3B32',
                fontSize: 16,
                fontFamily: 'FWDCircularVietTT-Book',

                boxWidth: 14,
              },
              align: 'end',
            },
            layout: {
              padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,

              }
            },
            tooltips: {
              enabled: false,
              custom: function (tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                  tooltipEl = document.createElement('div');
                  tooltipEl.id = 'chartjs-tooltip';
                  tooltipEl.innerHTML = '<table></table>';
                  document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                  tooltipEl.style.opacity = 0;
                  return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                  tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                  tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                  return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                  var titleLines = tooltipModel.title || [];
                  var bodyLines = tooltipModel.body.map(getBody);

                  const borderColor = tooltipModel.labelColors.map(item => item.backgroundColor);

                  tooltipEl.style.border = `2px solid ${borderColor[0]}`;

                  var innerHtml = '<thead>';

                  titleLines.forEach(function (title) {
                    innerHtml += `<tr><th class="tooltil-css tooltip-title">Ngày: ${title}</th></tr>`;
                  });
                  innerHtml += '</thead><tbody>';

                  bodyLines.forEach(function (body, i) {
                    const content = `Giá trị ${body.toString().replace('Q', 'q')}`;
                    innerHtml += `<tr><td class="tooltil-css tooltip-content">${content}</td></tr>`;
                  });
                  innerHtml += '</tbody>';

                  var tableRoot = tooltipEl.querySelector('table');
                  tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                const tooltipElOffset = 10;
                tooltipEl.style.minHeight = '60px';
                tooltipEl.style.minWidth = '166px';

                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.right = position.right + window.pageXOffset - tooltipModel.caretX + tooltipElOffset + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - parseInt(tooltipEl.style.minHeight) - tooltipElOffset + 'px';
                tooltipEl.style.pointerEvents = 'none';
              }
            }
          }}
          height={367}
          width={1000}
        />
      </div>
    </>
  );
}

export default Chart;