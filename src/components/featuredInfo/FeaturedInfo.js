import React from 'react';
import './FeaturedInfo.css';
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featureTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featruredMoney">$2,50,000</span>
                    <span className="featruredMoneyRate">-11.4 <AiOutlineArrowDown className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featruredMoney">$3,50,000</span>
                    <span className="featruredMoneyRate">-1.4 <AiOutlineArrowDown className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featruredMoney">$1,00,000</span>
                    <span className="featruredMoneyRate">+2.4 <AiOutlineArrowUp className='featuredIcon positive' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
