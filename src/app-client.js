import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes form './components/AppRoutes'

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
