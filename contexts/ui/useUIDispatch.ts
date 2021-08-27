import { useContext } from 'react'
import { UIDispatchContext } from './UIProviderContainer'

export const useUIDispatch = () => {
	const context = useContext(UIDispatchContext)

	if (context === undefined) {
		throw new Error(`useUIDispatch must be used within a UIProvider`)
	}
	return context
}
