//will be the mapping for which components are tied to which URL
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';

//whenever is user at root show App component
export default (
<Route path="/" component={App} />
);
