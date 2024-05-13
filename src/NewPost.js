import DataContext from "./context/DataContext";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from './api/posts.js';
import { format } from 'date-fns';

const NewPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const { posts, setPosts } = useContext(DataContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // this reducer function helps get the object with the highest id
        let id = posts.length ? posts.reduce((accumulator, currentValue) => typeof accumulator === "number" ? accumulator > currentValue.id ? accumulator : currentValue.id : accumulator.id > currentValue.id ? accumulator.id : currentValue.id, 0) : 0;
        id += 1;
        console.log(id);
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const newPost = {
            id,
            title: postTitle,
            datetime,
            body: postBody
        }
        try {
            const response = await axiosInstance.post("/posts", newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate("/");
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    autoFocus
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}

export default NewPost;