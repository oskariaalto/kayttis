import PropTypes from 'prop-types'
const cardStyles = {
  primary: `font-bold text-secondary text-lg pl-2`,
}

const CardTitle = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']}  {...props}/>
  )};

CardTitle.propTypes = {
  cardstyle: PropTypes.string,
  onClick: PropTypes.func
}

export default CardTitle;