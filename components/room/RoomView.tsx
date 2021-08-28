import { Chat } from './Chat'
import { Text } from '@components/ui/Text'

const CHAT_DATA = [
	{
		id: '1',
		userId: '1',
		username: 'yutaaaaa',
		roomId: '1',
		message: '真夏のピークが去った',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '2',
		userId: '2',
		username: 'fujiiiii',
		roomId: '1',
		message: '天気予報士がテレビで言ってた',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '3',
		userId: '1',
		username: 'yutaaaaa',
		roomId: '1',
		message: 'それでもいまだに街は',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '4',
		userId: '2',
		username: 'fujiiiii',
		roomId: '1',
		message: '落ち着かないような気がしている',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '5',
		userId: '1',
		username: 'yutaaaaa',
		roomId: '1',
		message: '夕方5時のチャイムが',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '6',
		userId: '2',
		username: 'fujiiiii',
		roomId: '1',
		message: '今日はなんだか胸に響いて',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '7',
		userId: '1',
		username: 'yutaaaaa',
		roomId: '1',
		message: '「運命」なんて便利なものでぼんやりさせて',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '8',
		userId: '2',
		username: 'fujiiiii',
		roomId: '1',
		message: '最後の花火に今年もなったな',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '9',
		userId: '1',
		username: 'yutaaaaa',
		roomId: '1',
		message: '何年経っても思い出してしまうな',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '10',
		userId: '2',
		username: 'fujiiiii',
		roomId: '1',
		message: 'ないかな　ないよな　きっとね　いないよな',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
	{
		id: '11',
		userId: '1',
		username: 'yutaaaaa',
		roomId: '1',
		message: '会ったら言えるかな　まぶた閉じて浮かべているよ',
		createdAt: '2021-08-31',
		updatedAt: null,
	},
]

export const RoomView = () => {
	const roomName = 'general'
	return (
		<div className="flex flex-col items-center pt-6 pb-24 w-full">
			<Text variant="h1" className="w-full text-left">
				{roomName}
			</Text>
			{CHAT_DATA.map((chat) => {
				return <Chat key={chat.id} chat={chat} />
			})}
		</div>
	)
}
