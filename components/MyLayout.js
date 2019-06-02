import React from 'react';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     { props.children }
//   </div>
// );

const withLayout = Page => props => (
  <div style={layoutStyle}>
    <Header />
    <Page {...props} />
  </div>
);

export default withLayout;
