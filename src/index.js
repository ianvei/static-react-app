import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderImg from './HeaderImg';
import BodyContent from './BodyContent';
import FooterContent from './FooterContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main-app'>
    <HeaderImg />
    <BodyContent />
    <FooterContent />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

