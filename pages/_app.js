import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import configStore from "../redux/configStore";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={configStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
