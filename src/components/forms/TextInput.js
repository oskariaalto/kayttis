import { useEffect, useState } from "react";
import { FileInput } from "./FileInput";
import { IconButton } from "../ui/buttons/IconButton";
import { AiOutlineFileAdd, AiOutlineSend } from "react-icons/ai";

// vanilla [#E7D79F]
// light brown [#D05A05] 
// bg brown [#2E1004]

const textAreaStyles ={
  primary: 'h-auto bg-[#2E1004] flex text-grey-darker py-2 px-3 pl-12 pr-12 font-normal text-[#D05A05] border border-[#E7D79F] w-full outline-none text-lg text-black resize-y min-h-12 rounded-lg',
}

const buttonWrapper = "flex items-end bg-[#2E1004] rounded-lg border-0 px-1 font-bold text-[#E7D79F] absolute bottom-3 hover:text-[#D05A05] "

export const TextInput = ({ placeholder, textstyle, setMessages, messages, onClick, loading }) => {
    const [prevKeypress, setPrevKeypress] = useState(0)
    const resizeTextarea = () => {
      const textarea = document.getElementById('resizeTextarea');
      textarea.style.height = '0px';
      textarea.style.height = textarea.scrollHeight + 'px';
    };

    useEffect(() => {
      resizeTextarea();
    }, []);
   
    const handleChange = (event) => {
      event.preventDefault();
      resizeTextarea();
    };
  
    const clearTextArea = () => {
      const textarea = document.getElementById('resizeTextarea');
      textarea.value = ''; 
      resizeTextarea()
    };
  
    const sendChat = async (text) => {
      if (text === "")
        return
      const element = {
        text: text,
        isAnswer: false,
        id: messages.length + 1
      }
      clearTextArea()
      const element1 = await onClick(text)
      setMessages(messages.concat([element,element1]))
    }
    const handleKeypress = e => {
      console.log(e.keyCode)
      console.log(prevKeypress)
    if (e.keyCode === 13 && prevKeypress!==16) {
      sendChat(document.getElementById('resizeTextarea').value);
      clearTextArea()
    } else if(e.keyCode !== 13){
      setPrevKeypress(e.keyCode)
    }
  };
  
  return(
    <div className="hero bg-gradient-dark h-auto flex flex-col px-2">
      <div className="search-box mx-auto my-auto w-full">
        <form className="flex flex-col relative z-20 w-full">
          <span className={`${buttonWrapper} left-2`}>
            <FileInput> 
                <AiOutlineFileAdd size={28}/>
            </FileInput>
          </span>
          <textarea
            className={textAreaStyles[textstyle || 'primary']}
            placeholder={placeholder}
            type="text"
            id="resizeTextarea"
            onChange={handleChange}
            onKeyDown={handleKeypress}
          ></textarea>
          <span className={`${buttonWrapper} right-2`}>
            <IconButton onClick={async () => {
              sendChat(document.getElementById('resizeTextarea').value)
              }}>
              {loading ?<span className="loading loading-spinner"></span> :<AiOutlineSend size={28}/>} 
            </IconButton>
          </span>
        </form>
      </div>
    </div>
  )};
