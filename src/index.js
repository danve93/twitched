import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Home from './home.js'
import Template from './template.js'
import GameStreams from './components/pages/gamestreams.js'
import Seguiti from './components/pages/seguiti.js'
import Sfoglia from './components/pages/sfoglia.js'
import Music from './components/pages/music.js'
import Esports from './components/pages/esports.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Template>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Seguiti' component={Seguiti}/>
          <Route exact path='/Sfoglia' component={Sfoglia} />
          <Route exact path='/GameStreams' component={GameStreams} />
          <Route exact path='/Music' component={Music} />
          <Route exact path='/Esports' component={Esports} />
        </Switch>
      </Template>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

