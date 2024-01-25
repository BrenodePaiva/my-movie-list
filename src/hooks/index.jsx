import PropTypes from 'prop-types'

import { MyListProvaider } from './MyListContext'

const appProvaider = ({ children }) => (
  <MyListProvaider>{children}</MyListProvaider>
)

appProvaider.propTypes = {
  children: PropTypes.node
}

export default appProvaider
