
const cardStyles = {
  primary: `bg-background p-2 shadow-xl rounded-xl w-full h-full`,
  answerBubble: `bg-secondary w-full h-full shadow-xl rounded-xl p-1`,
  questionBubble: `bg-primary w-full h-full shadow-xl rounded-xl p-1`,
  chatbox: `bg-background p-2 shadow-xl rounded-xl w-full max-h-96 overflow-y-auto`
}

const CardBody = ({cardstyle, ...props}) => {
  return(
    <div className={cardStyles[cardstyle || 'primary']} {...props}/>
  )};
export default CardBody;