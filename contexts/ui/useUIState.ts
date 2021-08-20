import { useContext } from 'react'
import { UIStateContext } from './UIProviderContainer'

export const useUIState = () => {
	const context = useContext(UIStateContext)

	if (context === undefined) {
		throw new Error(`useUIState must be used within a UIProvider`)
	}
	return context
}
