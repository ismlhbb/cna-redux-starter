import App, { AppContext } from 'next/app';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import initStore, { AppActions, RootState } from 'store';
import { Provider } from 'react-redux';
import Head from 'next/head';
import 'styles/index.scss';

export default withRedux(initStore, { debug: false })(
  class MyApp extends App<ReduxWrapperAppProps<RootState, AppActions>> {
    // use getInitialProps incase you need to get data during server side render
    // if not then delete this function
    static async getInitialProps({ Component, ctx }: AppContext) {
      return {
        pageProps: {
          ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Provider store={store}>
            <Component {...pageProps} {...this.state} />
          </Provider>
        </>
      );
    }
  }
);
