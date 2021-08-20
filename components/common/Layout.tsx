import { ReactNode, VFC } from 'react'
import { LoadingDots } from '@components/ui/LoadingDots'

type Props = {
	children: ReactNode
}

const Loading = () => (
	<div className="max-w-screen-sm min-h-screen mx-auto flex items-center justify-center">
		<LoadingDots />
	</div>
)

export const Layout: VFC<Props> = ({ children }) => {
	const loggedIn = false

	if (!loggedIn)
		return (
			<div className="max-w-screen-sm min-h-screen mx-auto my-0 px-5 flex flex-col justify-between">{children}</div>
		)

	return (
		<div className="max-w-screen-sm min-h-screen mx-auto my-0 px-5 flex flex-col justify-between">
			<>{children}</>
		</div>
	)
}
