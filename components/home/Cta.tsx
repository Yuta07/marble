import { useCallback } from 'react'
import Image from 'next/image'
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
			<div className="flex justify-center">
				<Image quality="85" src="/bear-outline.svg" alt="cta-logo" height={240} width={240} />
			</div>
			<h1 className="text-2xl text-center">Welocome to socket chat trial place. Only mobile display size.</h1>
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
