import styles from './LoadingDots.module.scss'

export const LoadingDots = () => {
	return (
		<span className={styles.container}>
			<span className={styles.dot} />
			<span className={styles.dot} />
			<span className={styles.dot} />
		</span>
	)
}
