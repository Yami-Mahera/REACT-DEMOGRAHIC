import React from 'react';
import Flag from './flag';
import { ColumnChart } from "react-chartkick";

window.Chart = require('chart.js')

const xTitle = "Age";
const yTitle = "% Mortalité";

const MortalityListItem = ({mortality}) => {
    
    const formatedDataMale = formatMortalityData(mortality.male);
    const formatedDataFemale = formatMortalityData(mortality.female);

    return (
        <tr>
            <td><Flag country = {mortality.country} className = "flag_medium"/></td>
            <td className = "col-md-6">
                <ColumnChart xtitle = {xTitle} ytitle = {yTitle} data = {formatedDataMale} max = {25}/>
            </td>
            <td className = "col-md-6">
                <ColumnChart xtitle = {xTitle} ytitle = {yTitle} data = {formatedDataFemale} max = {25}/>  
            </td>
        </tr>
    )
}

const formatMortalityData = (mortality) => {
    const filteredData = mortality.filter(data => (data.age >= 101) ? false : data);
    const array = filteredData.map(data => [Number((data.age).toFixed(0)), Number((data.mortality_percent).toFixed(0))])
    return array
}

export default MortalityListItem;