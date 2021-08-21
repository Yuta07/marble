import { useCallback } from 'react'
import { Button } from '@components/ui/Button'
import { useUIDispatch } from '@contexts/ui'

export const Cta = () => {
	const { openModal, setModal } = useUIDispatch()

	const handleModalSignup = useCallback(() => {
		openModal()
		setModal('SIGNUP')
	}, [])

	const handleModalSLogin = useCallback(() => {
		openModal()
		setModal('LOGIN')
	}, [])

	return (
		<div className="mx-auto my-12">
			<img src="/bear-outline.svg" alt="cta-logo" className="w-60 h-60 mx-auto" />
			<h1 className="text-2xl text-center">Welocome to socket chat trial place</h1>
			<div className="w-full mt-8 flex justify-around">
				<Button className="px-5 py-2 text-lg" onClick={handleModalSignup}>
					Signup
				</Button>
				<Button className="px-5 py-2 text-lg" onClick={handleModalSLogin}>
					Login
				</Button>
			</div>
		</div>
	)
}
