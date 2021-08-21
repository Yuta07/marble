import { ComponentPropsWithRef } from 'react'
import classnames from 'classnames'
import styles from './Input.module.scss'

export const Input = ({ ...props }: ComponentPropsWithRef<'input'>) => (
	<input
		{...props}
		ref={props.ref}
		autoComplete="off"
		autoCorrect="off"
		autoCapitalize="off"
		spellCheck="false"
		className={classnames(styles.root, props.className)}
	/>
)
