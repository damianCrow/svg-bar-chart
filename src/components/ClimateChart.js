import React, { useState } from 'react'
import climateData from "../data/climate_data_.json"
import Bar from "../partials/Bar"

const ClimateChart = () => {
	const pixFactor = 5 // this determins a pixel value for the bar height based on the json data.
	const [chartData, setChartData] = useState(climateData.impacts['climate_change'])

	return (
		<div>
			<h3 className="chart_title">{climateData.name}</h3>

			<select className="impact_select" onChange={ e => setChartData(climateData.impacts[e.currentTarget.value])}>
				<option value="climate_change">climate_change</option>
				<option value="energy_use">energy_use</option>
			</select>

			<div className="chart_wrapper">
				<Bar
						classes="production"
						inital="P"
						barHeight = {chartData.production * pixFactor}
				/>    
				<Bar
						classes="distribution"
						inital="D"
						barHeight = {chartData.distribution * pixFactor}
				/>    
				<Bar
						classes="use"
						inital="U"
						barHeight = {chartData.use * pixFactor}
				/>    
				<Bar
						classes="end_of_life"
						inital="E"
						barHeight = {chartData.end_of_life * pixFactor}
				/>    
			</div>
		</div>
    )
	}

export default ClimateChart