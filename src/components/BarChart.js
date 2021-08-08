import React, { useContext} from 'react'
import MyContext from '../context/MyContext'
import {Bar} from 'react-chartjs-2'

function BarChart() {
    const [{mon, tue, wed, thu, fri, sat, sun}] = useContext(MyContext)

    const chartData = {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [{
            label: '步行圈数',
            data: [mon, tue, wed, thu, fri, sat, sun],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
          }]
      }

    return (
        <>
            <div className="chart-container">
                <Bar width={300} 
                    height={300}
                    data={chartData}
                    options={{maintainAspectRatio: false}} />
            </div>
        </>
    )
}

export default BarChart
