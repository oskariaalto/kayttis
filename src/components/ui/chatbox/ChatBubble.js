import CardBody from "../cards/CardBody"
import { useEffect } from "react"

const textAreaStyles ={
    answerBubble: 'h-auto bg-neutral-500 flex text-grey-darker py-2 px-2 pl-4 font-normal text-grey-darkest border border-gray-100 w-full outline-none text-lg text-black resize-none min-h-12 rounded-lg text-left',
    questionBubble: 'h-auto bg-neutral-200 flex text-grey-darker py-2 px-2 pl-4 font-normal text-grey-darkest border w-full outline-none text-lg text-black resize-none min-h-12 rounded-lg text-left'
}

const divStyles = {
    answerBubble: 'flex w-4/5 h-full p-1',
    questionBubble: 'flex w-4/5 h-full p-1'
}

const ChatBubble = ({ text, id, isAnswer }) => {
    const style = isAnswer ? 'answerBubble' : 'questionBubble'

    const resizeChatBubble = () => {
        const textarea = document.getElementById(`chatBubble-${id}`);
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    useEffect(() => {
        resizeChatBubble();
    }, []);
    
    console.log(style)
    return (
        <div className={divStyles[style]}>
            <textarea
                readOnly
                className={textAreaStyles[style]}
                style={{ overflow:'hidden'}}
                type="text"
                id={`chatBubble-${id}`}
                value={text}
            >
            </textarea>
        </div>
    )
}

export default ChatBubble