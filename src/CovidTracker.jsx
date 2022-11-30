
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from 'react-router-dom';
import './Card.css';
import moment from "moment";
import { format } from 'date-fns'
import { parse } from "date-fns";
import { getDate } from "date-fns/esm";
import { useLocation } from 'react-router-dom'

const CovidTracker = () => {
  const location = useLocation().pathname.replace(/^\/|\/$/g, '');

  const [CovidCases,SetCovidCases]=useState({
    active:0,
    confirmed:0,
    deaths:0,
    recovered:0,
    lastupdatedtime:new Date().toString(),
  });


  useEffect(() =>{
    GetCovidData();

        document.getElementById(location).style.color = "blue";
      },[])



  const GetCovidData=async() =>{

  
    const rowdata=await fetch('https://data.covid19india.org/data.json');
    const coviddatajson=await rowdata.json();
    const aaa='lastupdatedtime';
    SetCovidCases(coviddatajson.statewise[0])
  
       SetCovidCases ((preValue) =>{
        return{
            ...preValue,
            [aaa]:new Date().toString(), 
        }
    })
    
    console.log(CovidCases);
}

  return (
    <>
         
        <title>Covid Tracker</title>
            
        <div className="category-name">Covid Tracker</div> <br/>
 
        <div className="card-category-1">
            <div className="basic-card basic-card-aqua">
                <div className="card-content">
                    <span className="card-title">Active Cases</span>
                    <p className="card-text">
                    {CovidCases.active}
                    </p>
                </div>
            </div>

            <div className="basic-card basic-card-lips">
                <div className="card-content">
                    <span className="card-title">Confirmed Cases</span>
                    <p className="card-text">
                    {CovidCases.confirmed}
                    </p>
                </div>
            </div>

            <div className="basic-card basic-card-light">
                <div className="card-content">
                    <span className="card-title">Deaths</span>
                    <p className="card-text">
                    {CovidCases.deaths}
                    </p>
                </div>
            </div>

            <div className="basic-card basic-card-dark">
                <div className="card-content">
                    <span className="card-title">Recovered</span>
                    <p className="card-text">
                    {CovidCases.recovered}
                    </p>
                </div>
            </div>
            
        </div>

        <div className="card-category-1">
        <div className="basic-card basic-card-yellow">
                <div className="card-content">
                    <span className="card-title">Last Updated</span>
                    <p className="card-text">
                      {CovidCases.lastupdatedtime.toString()}
                    
                      {/* {parse(CovidCases.lastupdatedtime.toString(), "dd.MM.yyyy", new Date())} */}

                    </p>
                </div>
            </div>
            </div>
        <br/>

 
    </>
  );
};
  
export default CovidTracker;