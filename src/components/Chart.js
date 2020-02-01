import React, { Component } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';
import './style.css';


class Chart extends Component {

    constructor(props) {




        super(props);

        this.state = {

            chartData: {
                labels: ['29-Jan', '30', '31', '1-Feb', '2-Feb'],
                datasets: [{
                    label: 'ACTUAL',
                    data: [5, 10, 20, 70, 75, 80],
                    lineTension: '0',
                    borderColor: '#CB1717',



                },
                {
                    label: 'PREDICTED',
                    data: [1, 4, 10, 13, 15, 20],
                    type: 'line',
                    lineTension: '0',
                    borderColor: '#FE6161',


                }]
            }
        }

    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}

                    options={{
                        legend: {
                            display: false
                        }
                    }}
                />

                <div className="predicted-alignment">
                    <div className="predicted-1">
                        <div className="predicted-color">  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                            <rect id="predictedSq" width="11" height="11" fill="#fe6161" />
                        </svg>

                        </div>
                        <div>  Predicted  </div>
                    </div>




                    <div className="actual-1">
                        <div className="actual-color"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11">
                            <path id="actualSq" d="M0,0H10V11H0Z" fill="#cb1717" />
                        </svg>
                        </div>
                        <div> Actual </div>
                    </div>


                </div>

            </div>
        )
    }
}





export default Chart; 
