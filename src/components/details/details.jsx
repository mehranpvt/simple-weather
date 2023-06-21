import React from "react";
import './details.scss';
import { FaArrowDown, FaArrowUp, FaRegSmile, FaWind } from 'react-icons/fa';
import { MdOutlineCompress } from 'react-icons/md';
import { GiWaterDrop } from 'react-icons/gi';
export default function Details({weather, units}) {

    const tempUnit = units === 'metric' ? '°C' : '°F';
    const windUnit = units === 'metric' ? 'm/s' : 'm/h';

    console.log('weather', weather);
    
    const cards = [
        {
            id: 1,
            icon: <FaArrowDown size={12}/>,
            title: 'Min',
            units: tempUnit,
            data: weather.temp_min.toFixed()
        },
        {
            id: 2,
            icon: <FaArrowUp size={12}/>,
            title: 'Max',
            units: tempUnit,
            data: weather.temp_max.toFixed()
        },
        {
            id: 3,
            icon: <FaRegSmile size={12}/>,
            title: 'Feels Like',
            units: tempUnit,
            data: weather.feels_like.toFixed()
        },
        {
            id: 4,
            icon: <MdOutlineCompress size={12}/>,
            title: 'Pressure',
            units: 'hPa',
            data: weather.pressure
        },
        {
            id: 5,
            icon: <GiWaterDrop size={12}/>,
            title: 'Humidity',
            units: '%',
            data: weather.humidity
        },
        {
            id: 6,
            icon: <FaWind size={12}/>,
            title: 'Wind Speed',
            units: windUnit,
            data: weather.speed.toFixed()
        },
    ]

    return (
        <div className="details-all width-100pct flex-row-space-between box-sizing">
            {cards.map(({ id, icon, title, units, data}) => {
                return (
                    <div key={id} className="detail flex-column-space-between-center padding-16 border-radius box-sizing">
                        <div className="title flex-row-center-center">
                            <div className="icon">
                                {icon}
                            </div>
                            <div className="name font-14 margin-left-4">{title}</div>
                        </div>
                        <div className="value font-bold font-24 margin-top-16">{`${data} ${units}`}</div>
                    </div>
                )
            })}
        </div>
    )
}