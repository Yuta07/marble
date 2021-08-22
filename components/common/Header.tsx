import Image from 'next/image'
import { FaGripLines } from 'react-icons/fa'
import { useUIDispatch } from '@contexts/ui'

export const Header = () => {
	const { openSidebar } = useUIDispatch()

	return (
		<header className="p-1 flex items-center justify-between ">
			<Image quality="85" src="/bear-outline.svg" alt="header_bear_logo" width={60} height={60} />
			<div className="my-auto inline-flex items-center">
				<button className="ml-2 p-2 border-none" onClick={openSidebar}>
					<FaGripLines className="text-gray-darken" />
				</button>
			</div>
		</header>
	)
}
