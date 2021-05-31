import './App.css';
import Story from './components/story';
import PostHeaderContainer from './components/post/postHeader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Story />
        <PostHeaderContainer />
      </header>
    </div>
  );
}

export default App;
