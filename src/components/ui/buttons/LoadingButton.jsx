import PropTypes from 'prop-types'

const buttonStyles = {
  primary: `bg-background text-secondary font-bold py-2 px-4 rounded align-middle w-[104.5px]`,
}

//bg-blue-500 text-white
// vanilla [#E7D79F]
// light brown [#D05A05]
// bg brown [#2E1004]

export const LoadingButton = ({buttonstyle}) => {
  return(
    <button className={buttonStyles[buttonstyle || 'primary']}>
        <span className="loading loading-spinner"></span>
    </button>
  )}

LoadingButton.propTypes = {
  buttonstyle: PropTypes.string,
  onClick: PropTypes.func
}