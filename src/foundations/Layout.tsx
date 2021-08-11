import { VFC, ReactNode } from 'react'
import styles from 'styles/layout.module.scss'

type Props = {
	children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
	const loggedIn = false

	if (!loggedIn) return <>{children}</>

	return (
		<div className={styles.container}>
			<div className={styles.main}>{children}</div>
		</div>
	)
}
