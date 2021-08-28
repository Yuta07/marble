import { useCallback, useState } from 'react'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'

export const ChatInputView = () => {
	const [comment, setComment] = useState<string>('')
	const [loading, setLoading] = useState(false)

	const handleCommentChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		setComment(event.currentTarget.value)
	}, [])

	const handleCommentSubmit = (event: React.SyntheticEvent<EventTarget>) => {
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

	const disabled = comment === ''

	return (
		<div className="fixed bottom-2 left-0 w-full">
			<form className="w-full" onSubmit={handleCommentSubmit}>
				<Input
					style={{ width: 'calc(100% - 46px)' }}
					className="h-10 text-base"
					placeholder="comment"
					type="text"
					name="comment"
					value={comment}
					onChange={handleCommentChange}
				/>
				<Button
					type="submit"
					className="p-3 ml-2 background-main"
					loading={loading}
					disabled={disabled}
					onClick={handleCommentSubmit}
				>
					<RiSendPlane2Fill className="text-primary" />
				</Button>
			</form>
		</div>
	)
}
