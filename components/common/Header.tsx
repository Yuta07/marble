import Image from 'next/image'
import { FaGripLines } from 'react-icons/fa'
import { useUIDispatch } from '@contexts/ui'

export const Header = () => {
	const { openSidebar } = useUIDispatch()

	return (
		<header className=" flex justify-between items-center">
			<Image quality="85" src="/bear-outline.svg" alt="header_bear_logo" width={60} height={60} />
			<div className="inline-flex items-center my-auto">
				<button name="menu" className="p-2 ml-2 border-none" onClick={openSidebar}>
					<FaGripLines className="text-gray-darken" />
				</button>
			</div>
		</header>
	)
}
