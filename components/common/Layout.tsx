import { ReactNode, VFC } from 'react'
import dynamic from 'next/dynamic'
import { LoginView } from '@components/auth/LoginView'
import { LoadingDots } from '@components/ui/LoadingDots'
import { useUIState } from '@contexts/ui/useUIState'

const Loading = () => (
	<div className="max-w-screen-sm min-h-screen mx-auto flex items-center justify-center">
		<LoadingDots />
	</div>
)

const SignupView = dynamic(() => import('@components/auth/SignupView'), { loading: () => <Loading /> })

type Props = {
	children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
	const state = useUIState()

	return (
		<div className="max-w-screen-sm min-h-screen mx-auto my-0 px-5 flex flex-col justify-between">
			<>{children}</>
		</div>
	)
}
