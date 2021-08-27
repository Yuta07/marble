import { ComponentPropsWithRef, forwardRef } from 'react'
import classnames from 'classnames'
import styles from './Input.module.scss'

export const Input = forwardRef<HTMLInputElement, ComponentPropsWithRef<'input'>>((props, ref) => (
	<input {...props} ref={ref} className={classnames(styles.root, props.className)} />
))
