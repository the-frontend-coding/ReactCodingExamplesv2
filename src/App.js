import './App.css';
import ReactSpreadOperatrParent from './ReactSpreadOperatrParent'
import ReactSpreadOperator from './ReactSpreadOperator'
import ReactDefaultPropsParent from './ReactDefaultPropsParent'
import ReactMapExample from './ReactMapExample'
import ReactFilterDuplicate from './ReactFilterDuplicate'
import ReactMaptoRemoveDuplicates from './ReactMaptoRemoveDuplicates'
import ReactReducetoRemoveDuplicates from './ReactReducetoRemoveDuplicates'

function App() {
  return (
    <div className="App">
      <ReactSpreadOperatrParent/>
      <ReactSpreadOperator/>
      <ReactDefaultPropsParent/>
      <ReactMapExample/>
      <ReactFilterDuplicate/>
      <ReactMaptoRemoveDuplicates/>
      <ReactReducetoRemoveDuplicates/>
    </div>
  );
}

export default App;
