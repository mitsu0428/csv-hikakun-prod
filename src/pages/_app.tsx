/* eslint-disable react/react-in-jsx-scope */
import "../styles/globals.css";
import { AppProps } from "next/app";
import { googleTagManagerId } from "../utils/gtm";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "./components/GoogleTagManager";
import HeaderComponents from "./components/HeaderComponents";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GoogleTagManager
      googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
    />
    <HeaderComponents />
    <Component {...pageProps} />
  </>
);

export default App;
