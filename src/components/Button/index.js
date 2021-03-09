import React, { useMemo } from 'react'
import classNames from 'classnames'

// styles
import styles from './styles.css'

const Button = ({ primary = true, title = '', ...rest }) => {
  const className = useMemo(
    () => classNames({
      [styles.primary]: primary,
    }),
    [primary],
  )

  return (
    <button className={className} type="button" {...rest}>
      {title}
    </button>
  )
}

export default Button
