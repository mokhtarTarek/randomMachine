import './App.css';
import QuoteBox from './components/QuoteBox';
import {data} from './data'
function App() {
  return (
    <div className="container-fluid">
      <QuoteBox data = {data}/>
    </div>
  );
}

export default App;
