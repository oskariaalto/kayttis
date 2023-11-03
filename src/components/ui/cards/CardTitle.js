const cardStyles ={
  primary: 'font-bold text-black text-xl pl-2',
}

const CardTitle = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']}  {...props}/>
  )};

export default CardTitle;