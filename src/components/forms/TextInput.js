import { useEffect } from "react";
import { FileInput } from "./FileInput";
import { IconButton } from "../ui/buttons/IconButton";
import { AiOutlineFileAdd, AiOutlineSend } from "react-icons/ai";


const textAreaStyles ={
  primary: 'h-auto bg-gray-100 flex text-grey-darker py-2 px-3 pl-12 font-normal text-grey-darkest border border-gray-100 w-full outline-none text-lg text-black resize-y min-h-12 rounded-lg',
}

const buttonWrapper = "flex items-end bg-gray-100 rounded-lg border-0 px-1 font-bold text-grey-100 absolute bottom-3 hover:text-black"

export const TextInput = ({ placeholder, textstyle }) => {
  
    const resizeTextarea = () => {
      const textarea = document.getElementById('resizeTextarea');
      textarea.style.height = '0px';
      textarea.style.height = textarea.scrollHeight + 'px';
    };

    useEffect(() => {
      resizeTextarea();
    }, []);

    const handleChange = (e) => {
      resizeTextarea();
    };
  
    const clearTextArea = () => {
      const textarea = document.getElementById('resizeTextarea');
      textarea.value = ''; 
      resizeTextarea()
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
          ></textarea>
          <span className={`${buttonWrapper} right-2`}>
            <IconButton onClick={() => clearTextArea()}>
              <AiOutlineSend size={28}/>
            </IconButton>
          </span>
        </form>
      </div>
    </div>
  )};