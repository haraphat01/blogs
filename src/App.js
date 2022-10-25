
import './App.css';
import PostList from './features/posts/postList';
import AddFormPost from './features/posts/addFormPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddFormPost/>
    <PostList/>
      </header>
    </div>
  );
}

export default App;
