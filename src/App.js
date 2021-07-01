import ChatWindow from './components/ChatWindow';

const styles = {
  App: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'lightblue',
  }
}

function App() {
  return (
    <div style={styles.App}>
      <ChatWindow />     
    </div>
  );
}

export default App;
