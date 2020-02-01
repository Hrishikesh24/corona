import React, { Component } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';

import Data from './sheetdata.js';

class Barchart extends Component {

    constructor(props) {
        super(props);

        console.log(Data);

        this.state = {
            barData: {
                labels: ['Confirmed', 'Deaths', 'Recovered'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            11374,
                            259,
                            252
                        ],
                        backgroundColor: ['#cb1717',
                            '#fd1d1d',
                            '#fe6161'], 
                            barPercentage : 0.4, 
                            display: 'auto'

                    }
                ]
            }

        }
    }

    render() {
        return (
            <div className="bar">

                <Bar
                    data={this.state.barData}

                    options={{
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                
                }

                />

            </div>
        )
    }
}

export default Barchart; 