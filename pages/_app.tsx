import { AppProps } from 'next/app'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
