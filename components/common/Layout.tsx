import { FC, ReactNode, VFC } from 'react'
import dynamic from 'next/dynamic'
import { LoginView } from '@components/auth/LoginView'
import { Header } from '@components/common/Header'
import { LoadingDots } from '@components/ui/LoadingDots'
import { Modal } from '@components/ui/Modal'
import { useUIDispatch, useUIState } from '@contexts/ui'
import type { ModalViewType } from '@contexts/ui'

const Loading = () => (
	<div className="max-w-screen-sm min-h-screen mx-auto flex items-center justify-center">
		<LoadingDots />
	</div>
)

const SignupView = dynamic(() => import('@components/auth/SignupView'), { loading: () => <Loading /> })

type Props = {
	children: ReactNode
}

const ModalView: FC<{ modalView: ModalViewType }> = ({ modalView }) => {
	const { closeModal } = useUIDispatch()

	return (
		<Modal onClose={closeModal}>
			{modalView === 'LOGIN' && <LoginView />}
			{modalView === 'SIGNUP' && <SignupView />}
		</Modal>
	)
}

const ModalUI = () => {
	const { displayModal, modalView } = useUIState()
	return displayModal && <ModalView modalView={modalView} />
}

export const Layout: VFC<Props> = ({ children }) => {
	const loggedIn = true

	return (
		<main className={`max-w-screen-sm min-h-screen mx-auto my-0 px-5 ${!loggedIn && `flex flex-col justify-between`}`}>
			<ModalUI />
			{loggedIn && <Header />}
			<>{children}</>
		</main>
	)
}
