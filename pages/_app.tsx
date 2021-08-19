import type { AppProps } from 'next/app'

import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'tailwindcss/tailwind.css'

import { Head } from '@components/common/Head'
import { Layout } from '@components/common/Layout'
import '@styles/global.css'
import '@styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
