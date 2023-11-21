import PropTypes from 'prop-types'
const cardStyles = {
  primary: `card w-full min-h-full bg-background shadow-xl rounded-xl p-3`,
}

const Card = ({style, ...props}) => {
  return(
    <div className={cardStyles[style || 'primary']}  {...props}/>
  )};

Card.propTypes = {
  style: PropTypes.string,
  onClick: PropTypes.func
}
export default Card;