import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
    const [ pageContent, setPageContent ] = useState("Content loading...");

    useEffect(() => {
        axios.get("/api/home").then((response)=> {
            setPageContent(response.data.content);
        });
    }, []);

    return (
        <div className="App-content">
            <div className="App-content-side"></div>
            <div className="App-content-area">
                <div className="ContentTextArea" dangerouslySetInnerHTML={{__html: pageContent}}></div>
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default HomePage