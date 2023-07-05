import React from 'react'
import './Home.css'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import { userData } from "../../../dummyData";
import WidgetSmall from '../../widgetSmall/WidgetSmall';
import WidgetLg from '../../widgetLg/WidgetLg';

export default function () {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid datakey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLg />
            </div>
        </div>
    )
}
