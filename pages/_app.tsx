import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'tailwindcss/tailwind.css'

import { Layout } from '@foundations/Layout'
import '@styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		document.body.classList?.remove('loading')
	}, [])

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
