import React, { useContext} from 'react'
import MyContext from '../context/MyContext'
import {Line} from 'react-chartjs-2'

function LineChart() {
    const [{mon, tue, wed, thu, fri, sat, sun}] = useContext(MyContext)

    const chartData = {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [{
            label: '步行圈数',
            data: [mon, tue, wed, thu, fri, sat, sun],
            backgroundColor: [
              'rgba(255, 159, 64, 1)',
            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            borderWidth: 4
          }]
      }

    return (
        <>
            <div className="chart-container">
                {/* <Line width={300} height={300} data={chartData} options={{maintainAspectRatio: false}} /> */}
                line chart here
            </div>
        </>
    )
}

export default LineChart
