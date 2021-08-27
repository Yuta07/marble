import { useCallback, useMemo, useReducer } from 'react'

export type ModalViewType = 'LOGIN' | 'SIGNUP' | 'MAKE_ROOM'

export type UIState = {
	displayModal: boolean
	displaySidebar: boolean
	modalView: ModalViewType
}

const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const SET_MODAL = 'SET_MODAL'
const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'

type openModalAction = {
	type: typeof OPEN_MODAL
}

type closeModalAction = {
	type: typeof CLOSE_MODAL
}

type setModalAction = {
	type: typeof SET_MODAL
	payload: ModalViewType
}

type openSidebarAction = {
	type: typeof OPEN_SIDEBAR
}

type closeSidebarAction = {
	type: typeof CLOSE_SIDEBAR
}

export type ActionType = openModalAction | closeModalAction | setModalAction | openSidebarAction | closeSidebarAction

const initialStateFactory: UIState = {
	displayModal: false,
	displaySidebar: false,
	modalView: 'LOGIN',
}

function uiReducer(state: UIState, action: ActionType): UIState {
	switch (action.type) {
		case 'OPEN_MODAL':
			return {
				...state,
				displayModal: true,
				displaySidebar: false,
			}
		case 'CLOSE_MODAL':
			return {
				...state,
				displayModal: false,
				displaySidebar: false,
			}
		case 'SET_MODAL':
			return {
				...state,
				modalView: action.payload,
			}
		case 'OPEN_SIDEBAR':
			return {
				...state,
				displaySidebar: true,
			}
		case 'CLOSE_SIDEBAR':
			return {
				...state,
				displaySidebar: false,
			}
	}
}

export const useUICore = () => {
	const [state, dispatch] = useReducer(uiReducer, initialStateFactory)

	const openModal = useCallback(() => {
		dispatch({ type: 'OPEN_MODAL' })
	}, [dispatch])

	const closeModal = useCallback(() => {
		dispatch({ type: 'CLOSE_MODAL' })
	}, [dispatch])

	const setModal = useCallback(
		(state: ModalViewType) => {
			dispatch({ type: 'SET_MODAL', payload: state })
		},
		[dispatch]
	)

	const openSidebar = useCallback(() => {
		dispatch({ type: 'OPEN_SIDEBAR' })
	}, [dispatch])

	const closeSidebar = useCallback(() => {
		dispatch({ type: 'CLOSE_SIDEBAR' })
	}, [dispatch])

	const UIValue = useMemo(
		() => ({
			state,
			openModal,
			closeModal,
			setModal,
			openSidebar,
			closeSidebar,
		}),
		[state]
	)

	return {
		UIValue,
	}
}
