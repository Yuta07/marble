import React, { useCallback, useState } from 'react'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { useUIDispatch } from '@contexts/ui'

const MakeRoomView = () => {
	const [roomname, setRoomname] = useState('')
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')

	const { closeModal } = useUIDispatch()

	const handleRoomnameChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		setRoomname(event.currentTarget.value)
	}, [])

	const handleMakeRoom = (event: React.SyntheticEvent<EventTarget>) => {
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

	const disabled = roomname === ''

	return (
		<form className="w-full" onSubmit={handleMakeRoom}>
			<img src="/bear-outline.svg" className="w-32 h-32 mx-auto" />
			<h2 className="text-xl text-center">Make a Room</h2>
			<div className="w-full flex flex-col">
				{message && <p className="text-error mt-4 px-3 py-2 border border-solid border-error rounded">{message}</p>}
				<Input
					className="mt-4"
					placeholder="roomname"
					type="text"
					name="roomname"
					value={roomname}
					onChange={handleRoomnameChange}
				/>
				<Button className="text-base mt-6" loading={loading} disabled={disabled}>
					Make a Room
				</Button>
			</div>
		</form>
	)
}

export default MakeRoomView
