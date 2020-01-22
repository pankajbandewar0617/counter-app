import React from 'react';
import { connect } from "react-redux";
import { count } from './action'
import store from './store';


const App = (props) => {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={actionInc}>+</button>
      <button onClick={actionDec}>-</button>
    </div>
  );
};

function actionInc() {
  const act = "INCREMENT";
  store.dispatch(count(act));
}

function actionDec() {
  const act = "DECREMENT";
  store.dispatch(count(act));
}

function mapStateToProps(state) {

  return {
    count: state
  };
}

export default connect(mapStateToProps)(App);
