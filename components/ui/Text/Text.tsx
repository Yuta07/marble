import { ReactNode } from 'react'
import classnames from 'classnames'
import styles from './Text.module.scss'

type Variant = 'h1' | 'h2' | 'p'

type Props = {
	variant: Variant
	className?: string
	children?: ReactNode
}

export const Text = ({ variant, className, children }: Props) => {
	const Component = variant

	return (
		<Component
			className={classnames(
				{
					[styles.heading_first]: variant === 'h1',
					[styles.heading_two]: variant === 'h2',
					[styles.text]: variant === 'p',
				},
				className
			)}
		>
			{children}
		</Component>
	)
}
