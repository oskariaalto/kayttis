import { useEffect } from "react"

// vanilla [#E7D79F]
// light brown [#D05A05]
// bg brown [#2E1004]

const textAreaStyles ={
    answerBubble: 'h-auto bg-[#D05A05] flex text-[#2E1004] py-2 px-2 pl-4 font-normal text-[#2E1004] w-full outline-none text-lg text-[#2E1004] resize-none min-h-12 rounded-lg text-left',
    questionBubble: 'h-auto bg-[#E7D79F] flex text-[#2E1004] py-2 px-2 pl-4 font-normal text-[#2E1004] w-full outline-none text-lg text-[#2E1004] resize-none min-h-12 rounded-lg text-left'
}

const divStyles = {
    answerBubble: 'flex w-4/5 h-full p-1',
    questionBubble: 'flex w-4/5 h-full p-1'
}

const ChatBubble = ({ text, id, isAnswer }) => {
    const style = isAnswer ? 'answerBubble' : 'questionBubble'

    useEffect(() => {
        const resizeChatBubble = () => {
            const textarea = document.getElementById(`chatBubble-${id}`);
            textarea.style.height = textarea.scrollHeight + 'px';
        };
        resizeChatBubble();
    }, [id]);
    
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