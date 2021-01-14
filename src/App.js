import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import { Container } from 'reactstrap';

function App() {
  return (  
    <div className="App">
      <Container>
        <Header/>
        <Body/>
      </Container>

    </div>
  );
}

export default App;
