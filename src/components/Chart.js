import React, { Component } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';



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
                    borderColor: 'rgb(255, 0, 4)',



                },
                {
                    label: 'PREDICTED',
                    data: [1,4 , 10, 13,15, 20],
                    type: 'line',
                    lineTension: '0',
                    borderColor: 'rgb(255, 153, 102)',


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
