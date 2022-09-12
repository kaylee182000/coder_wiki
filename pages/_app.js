import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import configStore from "../redux/configStore";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Provider store={configStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
