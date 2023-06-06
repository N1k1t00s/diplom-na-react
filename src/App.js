import React, {useState} from 'react';
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState()

  return (
    <div className="App">
    <PostItem post={{id: 1, title: 'Java', body: 'Description'}}></PostItem>
    </div>
  );
}

export default App;
