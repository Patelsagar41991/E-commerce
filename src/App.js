import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Home from './Container/Home';
import { Route, Router, Switch } from 'react-router-dom';
import Shope from './Container/Shope';
import Login from './Container/Login';
import Bookapk from './Container/Bookapk/Bookapk';
import Listapk from './Container/Listeapk/Listapk';
import Product from './Container/Product';
import Register from './Container/Register';
import Cardteble from './Container/Register/Cardteble';
import TableData from './Container/Register/TableData';
import Contact from './Container/Contact';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/shop' component={Shope}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/Book-apk' component={Bookapk}/>
          <Route exact path='/Book-apk' component={Bookapk}/>
          <Route exact path='/list1' component={Listapk}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/product' component={Product}/>
          <Route exact path='/table' component={TableData}/>
          <Route exact path='/card' component={Cardteble}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
