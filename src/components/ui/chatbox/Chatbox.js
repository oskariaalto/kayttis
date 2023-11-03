import { useState } from "react";
import CardBody from "../cards/CardBody";
import ChatBubble from "./ChatBubble";

const ChatBox = ({ messages }) => {

    console.log(messages)

    return (
        <div className="p-1 flex w-full h-full max-h-96 overflow-y-auto">
            <CardBody>
                {messages.map(message =>
                    <div key={message.id} className={message.isAnswer ? "flex justify-start h-1/5 w-7/8 p-1" : "flex justify-end h-1/5 w-7/8 p-1"}>
                        <ChatBubble isAnswer={message.isAnswer} id={message.id} text={message.text} />
                    </div>
                )}
            </CardBody>
        </div>
    )
}

export default ChatBox