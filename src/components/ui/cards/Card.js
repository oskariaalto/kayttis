
const cardStyles = {
  primary: `card w-full min-h-full bg-background shadow-xl rounded-xl p-3`,
}

const Card = ({style, ...props}) => {
  return(
    <div className={cardStyles[style || 'primary']}  {...props}/>
  )};

export default Card;