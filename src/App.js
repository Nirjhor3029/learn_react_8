// import logo from './logo.svg';
// import './App.css';
import { Content } from './Content';
import Footer from './Footer';
import Header from './Header';
// import Button from './components/Button';
// import Hover from './components/Hover';

function App() {
  return (
    <div className="App">
      <Header title="Grocery list"/>
      <Content/>
      <Footer/>

      {/* <Button newProp={"new"}/>
      <Hover/> */}
    </div>
  );
}

export default App;
