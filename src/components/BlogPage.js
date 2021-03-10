import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./BlogPage.css";
import { Link } from 'react-router-dom';



function BlogPage({ apipath }) {
    const postRoute = apipath + useParams().projectid;

    const [ postContent, setPostContent ] = useState([]);

    useEffect(() => {
        axios.get(postRoute).then(response => {
            setPostContent(response.data.content);
        });
    }, []);

    return (
        <div className="App-content">
            <div className="App-content-side" id="left">
                <Link to="/projects" id="back-button"> <i class="arrow"></i> Back</Link>
            </div>
            <div className="App-content-area">
                <div className="ContentTextArea" dangerouslySetInnerHTML={{__html: postContent}} />
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default BlogPage;