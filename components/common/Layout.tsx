import { FC, ReactNode, VFC } from 'react'
import dynamic from 'next/dynamic'
import { LoginView } from '@components/auth/LoginView'
import { Header } from '@components/common/Header'
import { Sidebar } from '@components/common/Sidebar'
import { LoadingDots } from '@components/ui/LoadingDots'
import { Modal } from '@components/ui/Modal'
import { useUIDispatch, useUIState } from '@contexts/ui'
import type { ModalViewType } from '@contexts/ui'

const Loading = () => (
	<div className="flex justify-center items-center mx-auto max-w-screen-sm min-h-screen">
		<LoadingDots />
	</div>
)

const SignupView = dynamic(() => import('@components/auth/SignupView'), { loading: () => <Loading /> })
const NavListView = dynamic(() => import('@components/common/NavList'), { loading: () => <Loading /> })
const MakeRoomView = dynamic(() => import('@components/room/MakeRoomView'), { loading: () => <Loading /> })

type Props = {
	children: ReactNode
}

const ModalView: FC<{ modalView: ModalViewType }> = ({ modalView }) => {
	const { closeModal } = useUIDispatch()

	const loggedIn = true

	return (
		<Modal onClose={closeModal}>
			{modalView === 'LOGIN' && <LoginView />}
			{modalView === 'SIGNUP' && <SignupView />}
			{loggedIn ? modalView === 'MAKE_ROOM' && <MakeRoomView /> : null}
		</Modal>
	)
}

const ModalUI = () => {
	const { displayModal, modalView } = useUIState()

	return displayModal && <ModalView modalView={modalView} />
}

const SidebarView = () => {
	const { closeSidebar } = useUIDispatch()

	return (
		<Sidebar onClose={closeSidebar}>
			<NavListView />
		</Sidebar>
	)
}

const SidebarUI = () => {
	const { displaySidebar } = useUIState()

	return displaySidebar && <SidebarView />
}

export const Layout: VFC<Props> = ({ children }) => {
	const loggedIn = true

	return (
		<main className={`max-w-screen-sm min-h-screen mx-auto my-0 px-5 ${!loggedIn && `flex flex-col justify-between`}`}>
			<ModalUI />
			{loggedIn && (
				<>
					<Header />
					<SidebarUI />
				</>
			)}
			<>{children}</>
		</main>
	)
}
