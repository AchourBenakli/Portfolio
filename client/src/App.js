import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Avaibalities from './pages/Avaibalities';
import Bookme from './pages/Bookme';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';


// import { useEffect, useState } from '.react';
// export const backToFront = () => {
//   const [initialState, setInitialState] = useState([])

//   useEffect(() => {
//     fetch('/users/').then(res => {
//       if (res.ok) {
//         return res.json()
//       }
//     }).then(jsonResponse => setInitialState(jsonResponse))
//   })
// }


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Knowledges" component={Knowledges} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Avaibalities" component={Avaibalities} />
          <Route path="/Bookme" component={Bookme} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

