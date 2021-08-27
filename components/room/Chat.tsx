import { VFC } from 'react'

type Props = {
	chat: {
		id: string
		userId: string
		username: string
		roomId: string
		message: string
		createdAt: string
		updatedAt?: string | null
	}
}

export const Chat: VFC<Props> = ({ chat }) => {
	const currnetUser = { id: '1', userName: 'yutaaaaa' }

	return (
		<div className="mt-5 w-full">
			{chat.userId === currnetUser.id ? (
				<div style={{ maxWidth: '80%' }} className="flex mr-auto">
					<p
						style={{ minWidth: '32px' }}
						className="inline-flex justify-center items-center p-2 mr-4 w-8 h-8 rounded-circle border-2 border-main border-solid"
					>
						{currnetUser.userName.slice(0, 1)}
					</p>
					<div className="p-4 rounded border border-solid border-gray">
						<small className="text-xs">{chat.updatedAt || chat.createdAt}</small>
						<p className="mt-2 text-sm">{chat.message}</p>
					</div>
				</div>
			) : (
				<div style={{ maxWidth: '80%' }} className="flex ml-auto">
					<div className="p-4 rounded border border-solid border-gray">
						<small className="text-xs">{chat.updatedAt || chat.createdAt}</small>
						<p className="mt-2 text-sm">{chat.message}</p>
					</div>
					<p
						style={{ minWidth: '32px' }}
						className="inline-flex justify-center items-center p-2 ml-4 w-8 h-8 rounded-circle border-2 border-main border-solid"
					>
						{currnetUser.userName.slice(0, 1)}
					</p>
				</div>
			)}
		</div>
	)
}
