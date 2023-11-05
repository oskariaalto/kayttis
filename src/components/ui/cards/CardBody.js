const cardStyles ={
  primary: 'bg-[#2E1004] p-2 shadow-xl rounded-xl w-full h-full',
  answerBubble: 'bg-[#D05A05] w-full h-full shadow-xl rounded-xl p-1',
  questionBubble: 'bg-[#E7D79F] w-full h-full shadow-xl rounded-xl p-1',
  chatbox: 'bg-[#2E1004] p-2 shadow-xl rounded-xl w-full max-h-96 overflow-y-auto'
}

// vanilla [#E7D79F]
// light brown [#D05A05]
// bg brown [#2E1004]

const CardBody = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']} {...props}/>
  )};
export default CardBody;