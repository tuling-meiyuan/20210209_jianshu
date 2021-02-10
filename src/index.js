import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import registerServiceWorker from './registerServiceWorker';
import App from './App';


ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <IconfontStyle/>
    <App/>
  </Fragment>, 
  document.getElementById('root')
);

registerServiceWorker();

