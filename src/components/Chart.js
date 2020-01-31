import React, { Component } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // chartData: {
            //     labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            //     datasets: [
            //         {
            //             label: 'Population',
            //             data: [
            //                 617594,
            //                 181045,
            //                 153060,
            //                 106519,
            //                 105162,
            //                 95072
            //             ],
            //             backgroundColor: ['rgba(255, 99, 132, 0.6)',
            //                 'rgba(54, 162, 235, 0.6)',
            //                 'rgba(255, 206, 86, 0.6)',
            //                 'rgba(75, 192, 192, 0.6)',
            //                 'rgba(153, 102, 255, 0.6)',
            //                 'rgba(255, 159, 64, 0.6)',
            //                 'rgba(255, 99, 132, 0.6)'],

            //         }
            //     ]
            // }

            chartData: {
                labels: ['29/01/20', '30/01/20', '31/01/20', '01/02/20', '02/02/20'],
                datasets: [{
                    label: '# of Votes',
                    data: [5, 10, 20, 70, 75, 80],
                    lineTension: '0',
                    borderColor: 'rgb(50, 168, 82)',



                },
                {
                    label: 'Line Dataset',
                    data: [10, 50, 60, 80, 85, 90],
                    type: 'line',
                    lineTension: '0',
                    borderColor: 'rgb(8, 198, 190)',

                }]
            }
        }

    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}

                    options={{}}
                />

            </div>
        )
    }
}

export default Chart; 