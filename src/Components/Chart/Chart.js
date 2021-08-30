import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    //將12個月的資料值都放入陣列dataPointValues[]中
    const totalMaximum = Math.max(...dataPointValues)
return(
    <div className='chart'>
        {props.dataPoints.map( dataPoint => <ChartBar 
        key = {dataPoint.label}
        value = {dataPoint.value}
        maxValue = {totalMaximum}
        label = {dataPoint.label}
        />)}
    </div>
)
}

export default Chart;