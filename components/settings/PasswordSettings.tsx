import { useCallback, useState } from 'react'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'

export const PasswordSettings = () => {
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const handlePasswordChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value)
	}, [])

	const handlePasswordUpdate = (event: React.SyntheticEvent<EventTarget>) => {
		event.preventDefault()

		setLoading(true)

		try {
			setLoading(false)
		} catch (errors) {
			console.log(errors[0].message)
		} finally {
			setLoading(false)
		}
	}

	const disabled = password === ''

	return (
		<div className="w-full flex flex-col">
			<Input
				className="mt-2"
				placeholder="password"
				type="password"
				name="password"
				value={password}
				onChange={handlePasswordChange}
			/>
			<Button className="w-24 mt-4 ml-auto" loading={loading} disabled={disabled} onClick={handlePasswordUpdate}>
				Update
			</Button>
		</div>
	)
}
