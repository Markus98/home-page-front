import axios from 'axios';
import { useEffect, useState } from 'react';
import { store } from 'react-notifications-component';
import { ReactTitle } from 'react-meta-tags';
import "./HomePage.css"

function HomePage() {
    const [ pageContent, setPageContent ] = useState("Content loading...");

    useEffect(() => {
        axios.get("/api/home").then((response)=> {
            setPageContent(response.data.content);
        }, (error) => {
            store.addNotification({
                title: "Error " + error.response.status,
                message: error.response.data,
                type: "danger",
                container: "top-right"
            });
        });
    }, []);

    const test = () => alert("test");

    return (
        <div className="App-content">
            <ReactTitle title="Home - Markus Tuominen"/>
            <div className="App-content-side"></div>
            <div className="App-content-area">
                <div id="home-introduction-container">
                    <img id="front-image" src="/images/front_img.png" />
                    <svg id="hello-title-svg" viewBox="0 0 60 24" >
                        <text id="hello-title" x="0" y="0" >
                            <tspan x="3" dy="1.2em" onClick={test}>Hi,</tspan>
                            <tspan x="3" dy="1.2em">I'm Markus</tspan>
                        </text>
                    </svg>
                    <i className="arrow down" id="front-page-down-arrow"></i>
                </div>
                <div className="padded-content-area">
                    <h1>Welcome to my home page!</h1>
                    <div className="content-text-area" dangerouslySetInnerHTML={{__html: pageContent}}></div>
                </div>
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default HomePage