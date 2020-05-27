import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from 'routes';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';

// Views
import Home from 'views/Home';
import Webdesign from 'views/Webdesign';
import Takecare from 'views/Takecare';
import Design from 'views/Design';
import Rodo from 'views/Rodo';


import ScrollToTop from 'functions/ScrollToTop';

const App = () => {

const Page = styled.div`
  padding-top: 70px;
`;

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <MainTemplate>
          <>
          
          <Page>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.webdesign} component={Webdesign} />
              <Route exact path={routes.takecare} component={Takecare} />
              <Route exact path={routes.design} component={Design} />
              <Route exact path={routes.rodo} component={Rodo} />
            </Switch>
          </Page>

          </>
        </MainTemplate>
      </BrowserRouter>
    </div>
  );
};

export default App;
