import PropTypes from 'prop-types'

import { ButtonRed, ButtonWhite } from './styles'

function Button({ children, red, ...rest }) {
  return (
    <>
      {red ? (
        <ButtonRed {...rest}>{children}</ButtonRed>
      ) : (
        <ButtonWhite {...rest}>{children}</ButtonWhite>
      )}
    </>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  red: PropTypes.bool
}

export default Button
