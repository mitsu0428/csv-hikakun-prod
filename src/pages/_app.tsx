/* eslint-disable react/react-in-jsx-scope */
import "../styles/globals.css";
import { AppProps } from "next/app";
import { googleTagManagerId } from "../utils/gtm";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "./components/utils/GoogleTagManager";
import { ToastProvider } from "../hooks/useToast";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ToastProvider>
    <GoogleTagManager
      googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
    />
    <Component {...pageProps} />
  </ToastProvider>
);

export default App;
