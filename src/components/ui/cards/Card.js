const cardStyles ={
  primary: 'card w-full h-full bg-neutral-400 shadow-xl rounded-xl rounded-tl-none p-3',
}

const Card = ({style, ...props}) => {
  return(
    <div className={cardStyles[style || 'primary']}  {...props}/>
  )};

export default Card;