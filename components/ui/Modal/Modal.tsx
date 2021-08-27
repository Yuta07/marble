import React, { ReactNode, ReactPortal, useEffect, useRef, VFC } from 'react'
import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'
import classnames from 'classnames'
import { disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll } from 'body-scroll-lock'
import styles from './Modal.module.scss'

type Props = {
	children: ReactNode
	className?: string
	onClose: () => void
}

export const Modal: VFC<Props> = ({ children, className, onClose }: Props): ReactPortal => {
	const container = useRef(document.createElement('div')).current as HTMLDivElement
	const ref = useRef() as React.MutableRefObject<HTMLDivElement>

	useEffect(() => {
		const modal = ref.current

		if (modal) {
			document.body.appendChild(container)
			disableBodyScroll(modal, { reserveScrollBarGap: true })
		}
		return () => {
			if (modal) {
				document.body.removeChild(container)
				enableBodyScroll(modal)
			}
			clearAllBodyScrollLocks()
		}
	}, [])

	const el = (
		<>
			<div className={styles.overlay} onClick={onClose} />
			<div className={classnames(styles.root, className)} ref={ref}>
				<div className="w-full my-0 p-5 rounded filter drop-shadow-lg bg-primary">
					<button className={styles.close} onClick={onClose}>
						<FiX />
					</button>
					{children}
				</div>
			</div>
		</>
	)

	return createPortal(el, container)
}
