import '../styles/globals.css';

import Amplify, { AuthModeStrategyType } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import '@aws-amplify/ui/dist/style.css';

Amplify.configure({
  ...awsconfig,
  DataStore: {
    AuthModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
