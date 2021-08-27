import { Cta } from './Cta'
import { Text } from '@components/ui/Text'

export const HomeView = () => {
	return (
		<>
			<header className="py-4">
				<Text variant="h1" className="text-center">
					socket-chat
				</Text>
			</header>
			<Cta />
			<footer className="py-4">
				<Text variant="p" className="text-xs text-center">
					© {new Date().getFullYear()},
					<a href="https://github.com/Yuta07" target="_blank" rel="noreferrer" className="mx-2 text-sm font-bold">
						yutaaaaa
					</a>
					All rights reserved.
				</Text>
			</footer>
		</>
	)
}
