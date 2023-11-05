const cardStyles ={
  primary: 'bg-white p-2 shadow-xl rounded-xl w-full h-full',
  answerBubble: 'bg-neutral-600 w-full h-full shadow-xl rounded-xl p-1',
  questionBubble: 'bg-neutral-200 w-full h-full shadow-xl rounded-xl p-1',
  chatbox: 'bg-white p-2 shadow-xl rounded-xl w-full max-h-96 overflow-y-auto'
}

const CardBody = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']} {...props}/>
  )};
export default CardBody;