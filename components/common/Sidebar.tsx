import React, { ReactNode, ReactPortal, useEffect, useRef, VFC } from 'react'
import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'
import classnames from 'classnames'
import styles from './Sidebar.module.scss'

type Props = {
	children: ReactNode
	className?: string
	onClose: () => void
}

export const Sidebar: VFC<Props> = ({ children, className, onClose }: Props): ReactPortal => {
	const container = useRef(document.createElement('div')).current as HTMLDivElement
	const ref = useRef() as React.MutableRefObject<HTMLDivElement>

	useEffect(() => {
		const modal = ref.current

		if (modal) {
			document.body.appendChild(container)
		}
		return () => {
			if (modal) {
				document.body.removeChild(container)
			}
		}
	}, [])

	const el = (
		<>
			<div
				className={`${styles.overlay} fixed top-0 left-0 z-4000 w-full h-full visible opacity-100`}
				onClick={onClose}
			/>
			<div
				className={classnames('absolute top-0 right-0 z-4001 w-10/12 h-full flex', styles.root, className)}
				ref={ref}
			>
				<div className="w-full h-full my-0 p-5 filter drop-shadow-lg bg-primary">
					<button className="z-4002 flex items-center border-none cursor-pointer" onClick={onClose}>
						<FiX />
						<span className="ml-2">close</span>
					</button>
					{children}
				</div>
			</div>
		</>
	)

	return createPortal(el, container)
}
