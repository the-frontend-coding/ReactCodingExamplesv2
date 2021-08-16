import './App.css';
import ReactSpreadOperatrParent from './ReactSpreadOperatrParent'
import ReactSpreadOperator from './ReactSpreadOperator'
import ReactDefaultPropsParent from './ReactDefaultPropsParent'
import ReactMapExample from './ReactMapExample'
import ReactFilterDuplicate from './ReactFilterDuplicate'
import ReactMaptoRemoveDuplicates from './ReactMaptoRemoveDuplicates'
import ReactReducetoRemoveDuplicates from './ReactReducetoRemoveDuplicates'
import ReactcomponentDidMount from './ReactcomponentDidMount'
import ReactHooksExample1 from './ReactHooksExample1'
import ReactHooksExample2 from './ReactHooksExample2'
import ReactHooksExample3 from './ReactHooksExample3'
import ReactHooksExample4 from './ReactHooksExample4'
import ReactuseEffect from './ReactuseEffect'
import ReactuseEffectExample from './ReactuseEffectExample'

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
      <ReactcomponentDidMount/>
      <ReactHooksExample1/>
      <ReactHooksExample2/>
      <ReactHooksExample3/>
      <ReactHooksExample4/>
      <ReactuseEffect/>
      <ReactuseEffectExample/>
    </div>
  );
}

export default App;
