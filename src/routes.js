import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, HomePage, NotFoundPage} from './components';
import { SearchPageContainer } from './containers';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route
      path="/:bookName"
      component={SearchPageContainer}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Route>
);
