import { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h2 className={styles.hero}>Home</h2>
		</div>
	)
}

export default Home
