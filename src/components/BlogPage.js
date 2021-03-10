import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';


function BlogPage({ apipath }) {
    const postRoute = apipath + useParams().projectid;

    const [ postContent, setPostContent ] = useState([]);

    useEffect(() => {
        axios.get(postRoute).then(response => {
            setPostContent(response.data.content);
        });
    }, []);

    return (
        <div className="ContentTextArea" dangerouslySetInnerHTML={{__html: postContent}} />
    );
}

export default BlogPage;