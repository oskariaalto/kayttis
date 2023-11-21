import PropTypes from 'prop-types'

const buttonStyles = {
  primary: '',
}

export const IconButton = ({buttonstyle,onClick, ...props}) => {
  return(
    <button className={buttonStyles[buttonstyle || 'primary']} onClick={onClick} {...props}/>
  )}

IconButton.propTypes = {
  buttonstyle: PropTypes.string,
  onClick: PropTypes.func
}
