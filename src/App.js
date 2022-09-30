import logo from './logo.svg';
import './App.css';
import { db, getRdmCodes } from './Firebase';

function App() {

  const codeList = getRdmCodes(db);
  console.log(codeList);

  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
