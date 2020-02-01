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
                            617594,
                            181045,
                            153060
                        ],
                        backgroundColor: ['rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)'], 
                            barPercentage : 0.3

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
                        }
                    }}

                />

            </div>
        )
    }
}

export default Barchart; 