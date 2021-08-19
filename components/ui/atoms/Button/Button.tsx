import { forwardRef } from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'
import { LoadingDots } from '@components/ui/atoms/LoadingDots'

type BaseProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends BaseProps {
	loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, loading, ...props }, ref) => {
	const rootClassName = classnames(
		styles.button,
		{ [styles.loading]: loading, [styles.disabled]: props.disabled },
		className
	)

	return (
		<button {...props} ref={ref} className={rootClassName}>
			{loading ? <LoadingDots /> : children}
		</button>
	)
})
