import { useCallback } from 'react'
import Link from 'next/link'
import { BsPlusSquare } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'
import { RiUserSettingsLine } from 'react-icons/ri'
import { useUIDispatch } from '@contexts/ui'

const roomList = ['general']

const NavList = () => {
	const { openModal, setModal } = useUIDispatch()

	const handleModalMakeRoom = useCallback(() => {
		openModal()
		setModal('MAKE_ROOM')
	}, [])

	return (
		<div className={`h-full mt-3 border-t border-solid border-gray drop-shadow flex flex-col`}>
			<ul className="py-4">
				{roomList.map((room) => {
					return (
						<li key={room} className="text-base text-gray-darken font-bold">
							#<span className="ml-2">{room}</span>
						</li>
					)
				})}
			</ul>
			<ul className="py-4 border-t border-solid border-gray drop-shadow">
				<li className="py-1">
					<button className="flex items-center border-none cursor-pointer" onClick={handleModalMakeRoom}>
						<BsPlusSquare className="text-main" size={20} />
						<span className="ml-3">Make a Room</span>
					</button>
				</li>
				<li className="mt-2 py-1">
					<Link href="/settings">
						<a className="flex items-center border-none cursor-pointer">
							<RiUserSettingsLine className="text-main" size={20} />
							<span className="ml-3">Settings</span>
						</a>
					</Link>
				</li>
				<li className="mt-2 py-1">
					<button className="flex items-center border-none cursor-pointer">
						<IoLogOutOutline className="text-main" size={20} />
						<span className="ml-3">Logout</span>
					</button>
				</li>
			</ul>
		</div>
	)
}

export default NavList
