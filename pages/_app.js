//Global SCSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../sass/home.scss';
import '../sass/case-study.scss';


import '../sass/full-page-react.scss';
import 'animate.css';
import '../sass/_global.scss';
import '../sass/responsive.scss'

import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  //
  const [ projectData, setProjectData ] = useState([]);
  
  //
  useEffect(() => {
      //PRODUCTION - 'https://server-my-portfolio.herokuapp.com/articles'
      //DEVELOPMENT - 'http://localhost:1337/articles
      fetch('https://server-my-portfolio.herokuapp.com/articles')
      .then(res => res.json())
      .then(data => setProjectData(data))
  }, []);


  return <Component {...pageProps} projectData={projectData} setProjectData={setProjectData} />
}

export default MyApp;
