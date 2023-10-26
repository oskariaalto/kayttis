const cardStyles ={
  primary: 'font-bold text-black text-lg pl-2',
}

const CardTitle = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']}  {...props}/>
  )};

export default CardTitle;