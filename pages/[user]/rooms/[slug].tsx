import { NextPage } from 'next'
import { ChatInputView } from '@components/room/ChatInputView'
import { RoomView } from '@components/room/RoomView'

const Room: NextPage = () => {
	return (
		<>
			<RoomView />
			<ChatInputView />
		</>
	)
}

export default Room
