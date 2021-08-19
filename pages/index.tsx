import { NextPage } from 'next'
import { Cta } from '@components/home/Cta'

const Home: NextPage = () => {
	return (
		<>
			<header className="py-4">
				<h1 className="text-xl font-bold text-center">socket-chat</h1>
			</header>
			<Cta />
			<footer className="py-4">
				<p className="text-xs text-center">
					© {new Date().getFullYear()},
					<a href="https://github.com/Yuta07" target="_blank" rel="noreferrer" className="mx-2 text-sm font-bold">
						yutaaaaa
					</a>
					All rights reserved.
				</p>
			</footer>
		</>
	)
}

export default Home
