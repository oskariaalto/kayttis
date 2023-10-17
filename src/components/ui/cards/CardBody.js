const cardStyles ={
  primary: 'p-2 w-full',
}

const CardBody = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']} {...props}/>
  )};

export default CardBody;