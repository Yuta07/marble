import { AppProps } from 'next/app'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'tailwindcss/tailwind.css'

import { Layout } from '../src/foundations/Layout'
import '../src/styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
