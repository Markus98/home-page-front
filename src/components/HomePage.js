import axios from 'axios';
import { useEffect, useState } from 'react';
import { store } from 'react-notifications-component';
import { ReactTitle } from 'react-meta-tags';

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

    return (
        <div className="App-content">
            <ReactTitle title="Home - Markus Tuominen"/>
            <div className="App-content-side"></div>
            <div className="App-content-area">
                <div className="ContentTextArea" dangerouslySetInnerHTML={{__html: pageContent}}></div>
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default HomePage