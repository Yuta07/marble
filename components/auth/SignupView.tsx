import { useCallback, useState } from 'react'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { useUIDispatch } from '@contexts/ui'

const SignupView = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')

	const { closeModal, setModal } = useUIDispatch()

	const handleUsernameChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		setUsername(event.currentTarget.value)
	}, [])

	const handlePasswordChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value)
	}, [])

	const handleSignup = (event: React.SyntheticEvent<EventTarget>) => {
		event.preventDefault()

		setLoading(true)
		setMessage('')

		try {
			setLoading(false)
			closeModal()
		} catch (errors) {
			setMessage(errors[0].message)
		} finally {
			setLoading(false)
		}
	}

	const handleValidationCheck = useCallback(() => {
		if (username === '' || password === '') {
			return true
		} else {
			return false
		}
	}, [username, password])

	const disabled = handleValidationCheck()

	return (
		<form className="w-full" onSubmit={handleSignup}>
			<img src="/bear-outline.svg" className="mx-auto w-32 h-32" />
			<h2 className="text-xl text-center">Signup</h2>
			<div className="flex flex-col w-full">
				{message && <p className="py-2 px-3 mt-4 text-error rounded border border-solid border-error">{message}</p>}
				<Input
					className="mt-4"
					placeholder="username"
					type="text"
					name="username"
					value={username}
					onChange={handleUsernameChange}
				/>
				<Input
					className="mt-4"
					placeholder="password"
					type="password"
					name="password"
					value={password}
					onChange={handlePasswordChange}
				/>
				<Button className="mt-6" loading={loading} disabled={disabled}>
					Signup
				</Button>
			</div>
			<p className="mt-8 text-center">
				<a className="text-main text-s" onClick={() => setModal('LOGIN')}>
					Already have an account? Login.
				</a>
			</p>
		</form>
	)
}

export default SignupView
