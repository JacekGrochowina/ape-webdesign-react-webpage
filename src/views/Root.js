import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

import MainTemplate from 'templates/MainTemplate';

import iconMapMarker from 'assets/icons/iconMapMarker.svg';

// Views
  import Home from 'views/Home';

// Components
  import Button from 'components/atoms/Button';
  import Heading from 'components/atoms/Heading';
  import Paragraph from 'components/atoms/Paragraph';
  import Item from 'components/atoms/Item';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <MainTemplate>

        <br/>
        <br/>
        <Button>Hello World!</Button>
        <br/>
        <br/>
        <Button secondary>Hello World!</Button>
        <br/>
        <br/>
        <Heading>Hello World</Heading>
        <br/>
        <br/>
        <Heading secondary>Hello World</Heading>
        <br/>
        <br/>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id libero eget elit malesuada bibendum ut quis nisi. Sed odio nisl, rhoncus at vulputate vitae, pretium vitae arcu. Sed vel erat ut ante eleifend dictum. Proin at tristique urna. Proin eu erat sed nulla vestibulum scelerisque. Curabitur hendrerit hendrerit nisi vel congue. Aenean pharetra velit metus, non volutpat mauris convallis nec. Sed lacus ipsum, cursus a interdum vel, pharetra quis eros. Ut dapibus placerat vestibulum. Aliquam eget lectus id diam fringilla imperdiet. Etiam aliquam, metus sit amet lobortis iaculis, nisi lorem dapibus massa, dictum pellentesque neque purus eu lectus. Nam pharetra gravida sapien.</Paragraph>
        <br/>
        <br/>
        <Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Item>
        <Item icon={iconMapMarker} iconSize={60} fontSize={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Item>
        <Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Item>

        {/* <Switch>
          <Route exact path={routes.home} component={Home} />
        </Switch> */}
      </MainTemplate>
    </BrowserRouter>
  </div>
)

export default App;
