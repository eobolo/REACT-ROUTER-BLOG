import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DataContext from "./context/DataContext";
import { useContext } from "react";
import axiosInstance from './api/posts.js';
import { format } from 'date-fns';

const EditPost = () => {
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const { posts, setPosts } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => (post.id).toString() === id);
    const navigate = useNavigate();
    
    
    const handleEdit = async (id) => {
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = { id, title: editTitle, datetime, body: editBody }
        try {
            const response = await axiosInstance.put(`/posts/${id}`, updatedPost);
            const updatePosts = posts.map((post) => post.id === id ? { ...response.data } : post);
            setPosts(updatePosts)
            setEditTitle('');
            setEditBody('');
            navigate('/');
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }

    }

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);
    
    return (
        <main className="NewPost">
            {post &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title</label>
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            autoFocus
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button
                            type="submit"
                            onClick={(e) => handleEdit(post.id)}
                        >Submit
                        </button>
                    </form>
                </>
            }
            {!post &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>
                            Visit Our Homepage
                        </Link>
                    </p>
                </>
            }
        </main>
    );
}

export default EditPost