import './App.css';
import { db, getRdmCodes } from './Firebase';
import { useAsync } from 'react-async';

const loadRdmCodes = async () => {
  const codeList = await getRdmCodes(db);
  return codeList;
}

const App = () => {
  const { data, error } = useAsync({ promiseFn: loadRdmCodes, customerId: 1 });
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    console.log(data);
  
    return (
      <div className="App">
        <p>hello</p>
      </div>
    );
};

export default App;
