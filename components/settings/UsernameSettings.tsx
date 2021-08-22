import { useCallback, useState } from 'react'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'

export const UsernameSettings = () => {
	const [username, setUsername] = useState('')
	const [loading, setLoading] = useState(false)

	const handleUsernameChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		setUsername(event.currentTarget.value)
	}, [])

	const handleUsernameUpdate = (event: React.SyntheticEvent<EventTarget>) => {
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

	const disabled = username === ''

	return (
		<div className="w-full flex flex-col">
			<Input
				className="mt-2"
				placeholder="username"
				type="text"
				name="username"
				value={username}
				onChange={handleUsernameChange}
			/>
			<Button className="w-24 mt-4 ml-auto" loading={loading} disabled={disabled} onClick={handleUsernameUpdate}>
				Update
			</Button>
		</div>
	)
}
