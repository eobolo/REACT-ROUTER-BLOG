import { createContext, useState, useEffect } from "react";
import useAxiosFetchHook from '../hooks/useAxiosFetchHook.js';
const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const { data, fetchError, isLoading } = useAxiosFetchHook('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data]);
    useEffect(() => {
        const filteredList = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredList.reverse());
    }, [posts, search])
    return (
        <DataContext.Provider value={{
            search, setSearch, searchResults, isLoading,
            fetchError, posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataContext;