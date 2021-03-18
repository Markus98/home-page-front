import axios from 'axios';
import { useEffect, useState } from 'react';
import { store } from 'react-notifications-component';
import { ReactTitle } from 'react-meta-tags';
import "./HomePage.css"
import ReactGA from 'react-ga';

function HomePage() {

    const title = "Home - Markus Tuominen";

    const [ frontImagePath, setFrontImagePath ] = useState("");
    const [ pageContent, setPageContent ] = useState("Content loading...");

    useEffect(() => {
        axios.get("/api/projects/home").then((response)=> {
            setPageContent(response.data.content);
            setFrontImagePath(response.data.image);
            ReactGA.pageview(window.location.pathname + window.location.search, [], title);
        }, (error) => {
            store.addNotification({
                title: "Error " + error.response.status,
                message: error.response.data,
                type: "danger",
                container: "top-right"
            });
        });
    }, []);

    return (
        <div className="App-content">
            <ReactTitle title={title}/>
            <div className="App-content-side"></div>
            <div className="App-content-area">
                <div id="home-introduction-container">
                    <img id="front-image" src={frontImagePath} />
                    <svg id="hello-title-svg" viewBox="0 0 60 24" >
                        <text id="hello-title" x="0" y="0" >
                            <tspan x="3" dy="1.2em">Hi,</tspan>
                            <tspan x="3" dy="1.2em">I'm Markus</tspan>
                        </text>
                    </svg>
                    <i className="arrow down" id="front-page-down-arrow"></i>
                </div>
                <div className="padded-content-area">
                    <div className="content-text-area" dangerouslySetInnerHTML={{__html: pageContent}}></div>
                </div>
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default HomePage