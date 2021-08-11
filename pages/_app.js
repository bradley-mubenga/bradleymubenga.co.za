//Global SCSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../sass/_global.scss';
import '../sass/home.scss';

import '../sass/responsive.scss'
import '../sass/full-page-react.scss';
import 'animate.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
