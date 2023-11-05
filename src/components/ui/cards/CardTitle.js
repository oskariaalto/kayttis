const cardStyles ={
  primary: 'font-bold text-[#D05A05] text-lg pl-2',
}

// vanilla [#E7D79F]
// light brown [#D05A05]
// bg brown [#2E1004]

const CardTitle = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']}  {...props}/>
  )};

export default CardTitle;