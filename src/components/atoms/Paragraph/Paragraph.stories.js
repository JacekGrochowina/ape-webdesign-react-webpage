import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Atoms/Paragraph', module)
    .add('Normal', () => <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id libero eget elit malesuada bibendum ut quis nisi. Sed odio nisl, rhoncus at vulputate vitae, pretium vitae arcu. Sed vel erat ut ante eleifend dictum. Proin at tristique urna. Proin eu erat sed nulla vestibulum scelerisque. Curabitur hendrerit hendrerit nisi vel congue. Aenean pharetra velit metus, non volutpat mauris convallis nec. Sed lacus ipsum, cursus a interdum vel, pharetra quis eros. Ut dapibus placerat vestibulum. Aliquam eget lectus id diam fringilla imperdiet. Etiam aliquam, metus sit amet lobortis iaculis, nisi lorem dapibus massa, dictum pellentesque neque purus eu lectus. Nam pharetra gravida sapien.</Paragraph>
    )