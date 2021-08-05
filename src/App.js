
import { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import './App.css';
import MainComponent from './components/MainComponent';
import IdleTimerCounter from './redux/Action_creators';



const store = ConfigureStore();


class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App color1">
         <MainComponent />
         <IdleTimerCounter/>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}



export default App;