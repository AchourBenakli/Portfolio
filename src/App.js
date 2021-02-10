import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Avaibalities from './pages/Avaibalities';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Modal from './pages/Modal';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Knowledges" component={Knowledges} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Avaibalities" component={Avaibalities} />
          <Route path="/Modal" component={Modal} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

