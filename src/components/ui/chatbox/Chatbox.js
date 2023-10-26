import CardBody from "../cards/CardBody";
import ChatBubble from "./ChatBubble";

const ChatBox = ({ messages }) => {

    console.log(messages)

    return (
        <CardBody cardstyle={"chatbox"}>
            {messages.map(message =>
                <div key={message.id} className={message.isAnswer ? "flex justify-start h-1/5 w-7/8 p-1" : "flex justify-end h-1/5 w-7/8 p-1"}>
                    <ChatBubble isAnswer={message.isAnswer} id={message.id} text={message.text} />
                </div>
            )}
        </CardBody>
    )
}

export default ChatBox