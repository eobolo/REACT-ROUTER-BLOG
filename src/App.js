import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Home from './Home.js';
import NewPost from './NewPost.js';
import PostPage from './PostPage.js';
import About from './About.js';
import Missing from './Missing.js'
import EditPost from './EditPost.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DataProvider } from './context/DataContext.js';

function App() {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/post" Component={NewPost} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/edit/:id" Component={EditPost} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
