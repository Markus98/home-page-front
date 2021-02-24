import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
    const [ pageContent, setPageContent ] = useState("Content not yet loaded.");

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/posts/1").then((response)=> {
            setPageContent(response.data.content);
        });
    }, []);

    return (
        <div className="ContentTextArea" dangerouslySetInnerHTML={{__html: pageContent}} />
    );
}

export default HomePage