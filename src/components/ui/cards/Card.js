const cardStyles ={
  primary: 'card w-full min-h-full bg-[#2E1004] shadow-xl rounded-xl p-3',
}

// vanilla [#E7D79F]
// light brown [#D05A05]
// bg brown [#2E1004]

const Card = ({style, ...props}) => {
  return(
    <div className={cardStyles[style || 'primary']}  {...props}/>
  )};

export default Card;