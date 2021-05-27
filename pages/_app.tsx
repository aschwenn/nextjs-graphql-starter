import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link href="path/to/node_modules/normalize.css/normalize.css" rel="stylesheet" />
      {/* blueprint-icons.css file must be included alongside blueprint.css! */}
      <link href="path/to/node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css" rel="stylesheet" />
      <link href="path/to/node_modules/@blueprintjs/core/lib/css/blueprint.css" rel="stylesheet" />
      {/* add other blueprint-*.css files here  */}
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
