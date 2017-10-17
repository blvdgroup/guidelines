import * as React from 'react'
import * as classnames from 'classnames'
import './Button.css'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  kind?: string
}

const Button: React.SFC<ButtonProps> = ({ children, kind, ...props }) => (
  <button className={classnames('button', kind ? `button--${kind}` : '')} {...props}>
    {children}
  </button>
)

export default Button
