import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as classnames from 'classnames'
import './Button.css'

const Button = ({ children, kind, ...props }) => (
  <button className={classnames('button', kind ? `button--${kind}` : '')} {...props}>
    {children}
  </button>
)

Button.defaultProps = {
  kind: 'default'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.string
}

export default Button
