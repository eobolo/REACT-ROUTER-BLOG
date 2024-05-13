import { useParams, Link } from "react-router-dom";
import DataContext from "./context/DataContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from './api/posts.js';

const PostPage = () => {
    const { posts, setPosts } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => (post.id).toString() === id);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/posts/${id}`);
            const postList = posts.filter((post) => post.id !== id);
            setPosts(postList);
            navigate("/");
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="PostDate">{post.datetime}</p>                      
                        <p className="PostBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button
                                className="editButton"
                            >
                                Edit Post
                            </button>
                        </Link>
                        <button
                            className="deleteButton"
                            onClick={() => handleDelete(post.id)}
                        >
                            Delete Post
                        </button>
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
            </article>
        </main>
    );
}

export default PostPage;