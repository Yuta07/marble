import { ComponentPropsWithRef } from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'
import { LoadingDots } from '../LoadingDots'

type BaseProps = ComponentPropsWithRef<'button'>

interface ButtonProps extends BaseProps {
	loading?: boolean
}

export const Button = ({ children, className, loading, ...props }: ButtonProps) => {
	const rootClassName = classnames(
		styles.button,
		{ [styles.loading]: loading, [styles.disabled]: props.disabled },
		className
	)

	return (
		<button {...props} ref={props.ref} className={rootClassName}>
			{loading ? <LoadingDots /> : children}
		</button>
	)
}
