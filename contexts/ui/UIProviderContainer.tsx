import { createContext, ReactNode, VFC } from 'react'
import { ModalViewType, UIState, useUICore } from './useUICore'

type Props = {
	children: ReactNode
}

type DispatchAction = {
	openModal: () => void
	closeModal: () => void
	setModal: (state: ModalViewType) => void
	openSidebar: () => void
	closeSidebar: () => void
}

export const UIStateContext = createContext<UIState | undefined>(undefined)
export const UIDispatchContext = createContext<DispatchAction>(null)

export const UIProviderContainer: VFC<Props> = (props) => {
	const { UIValue } = useUICore()

	const { state, openModal, closeModal, setModal, openSidebar, closeSidebar } = UIValue

	return (
		<UIStateContext.Provider value={state}>
			<UIDispatchContext.Provider value={{ openModal, closeModal, setModal, openSidebar, closeSidebar }}>
				{props.children}
			</UIDispatchContext.Provider>
		</UIStateContext.Provider>
	)
}
