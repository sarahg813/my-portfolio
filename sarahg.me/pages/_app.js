import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
require("../stylesheets/main.scss");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
