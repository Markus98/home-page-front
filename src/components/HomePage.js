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
        <div className="ContentTextArea" dangerouslySetInnerHTML={{__html: pageContent}} />
    );
}

export default HomePage