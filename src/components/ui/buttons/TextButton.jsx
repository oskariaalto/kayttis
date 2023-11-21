import PropTypes from 'prop-types'
const buttonStyles = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  disabled: `bg-background hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled`
}

// vanilla [#E7D79F]
// light brown [#D05A05]
// bg brown [#2E1004]

export const TextButton = ({buttonstyle, ...props}) => {
  return(
    <button className={buttonStyles[buttonstyle || 'primary']} {...props}/>
  )}

TextButton.propTypes = {
  buttonstyle: PropTypes.string,
  onClick: PropTypes.func
}
