const cardStyles ={
  primary: 'card w-2/3 bg-white shadow-xl rounded-xl p-3',
}


const Card = ({style, ...props}) => {
  return(
    <div className={cardStyles[style || 'primary']}  {...props}/>
  )};

export default Card;