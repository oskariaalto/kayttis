import Card from './ui/cards/Card';
import CardTitle from './ui/cards/CardTitle';
import CardBody from './ui/cards/CardBody';
import { TextInput } from './forms/TextInput';
import { ChooseCourse, ChooseExercise } from './forms/ChooseCourse';
import { useState } from 'react';
import LatexRenderer from './RenderMarkdown';
import ChatBox from './ui/chatbox/Chatbox';
import { TextButton } from './ui/buttons/TextButton';
import { LoadingButton } from './ui/buttons/LoadingButton';
import { getHints, sendChat } from '../controllers/chat';

// vanilla [#E7D79F]
// light brown [#D05A05]
// bg brown [#2E1004]

export const Chat = ({ course, setCourse, exercises, setExercises, exercise, setExercise,
  messages, setMessages, QuestionState, setQuestionState, history, setHistory, title, setTitle, courses }) => {

  const [loading, setLoading] = useState(false)  
  const [hints, setHints] = useState([])
  const [hintCount, setHintCount] = useState(0)
  const [chatId, setChatId] = useState(0)
  const [disableHintsButton, setDisableHintsButton] = useState(false)

  const Conversation = () => {
    setQuestionState(3)
    setHintCount(0)
    setChatId(0)
    setHints([])
  }

  const FormNewQuestionExercise = () => {
    setQuestionState(2)
    setHintCount(0)
    setChatId(0)
    setHints([])
    setExercise("")
  }

  const FormNewQuestionCourse = () => {
    if (history.map(oldChat => oldChat.id).includes(chatId)) {
      const updatedObject = {
          exercise: exercise,
          course: course,
          messages: messages,
          QuestionState: QuestionState,
          id: chatId
      }
      setHistory(history.filter(oldChat => oldChat.id !== chatId).concat(updatedObject))
    }
    else if (messages.length !== 0) {
      const newObject = {
        exercise: exercise,
        course: course,
        messages: messages,
        QuestionState: QuestionState,
        id: history.length + 1
      }
      setHistory(history.concat(newObject))
    }
    setQuestionState(1)
    setCourse({})
    setExercise({})
    setTitle("New Chat")
    setMessages([])
    setHintCount(0)
    setChatId(0)
    setHints([])
    setChatId(history.length+1)
  }

  const UpdateCourse = (course) => {
    setCourse(course)
    setTitle("Chat")
    setExercises(course.assignments)
  }

  const handleGetHints = async () => {
    console.log(exercise.id)
    setLoading(true)
    const hint = await getHints(exercise.id)
    console.log(hint)
    setChatId(hint.chatId)
    setHints(hint.answer.split("\n"))
    setHintCount(1)
    setLoading(false)
  }

  const sendMessage = async (message)=>{
    console.log(messages)
    setLoading(true)
    const answer = await sendChat(message, chatId, exercise.id)
    setLoading(false)
    console.log(answer)
    setChatId(answer.chatId)
    const element = {
      text: answer.answer,
      isAnswer: true,
      id: messages.length + 2
    }
    return element
  }  

// items-center  justify-center <div className='flex w-full h-full'>
  return (
    
    <Card>
      <div className='flex w-full'> 
        <div className='flex justify-start p-1 h-full w-1/5'>
          <button onClick={FormNewQuestionCourse}> <CardTitle cardstyle='primary' >{title}</CardTitle> </button>
        </div>
        <div className='flex justify-center p-1 h-full w-1/2'>
          <ChooseCourse handleClick={FormNewQuestionExercise} courses={courses} setCourse={UpdateCourse} chosenCourse={course.name} />
        </div>
        <div className='flex justify-start p-1 h-full w-3/10'>
          {QuestionState >= 2 ? <ChooseExercise handleClick={Conversation} exercises={exercises} setExercise={setExercise} chosenExercise={exercise.name} /> : <></>}
        </div>
      </div>
      {QuestionState ===3 && exercise.name &&
      <div className='p-2 text-[#E7D79F]'>
        <CardBody cardstyle="chatbox">
          <span className='font-bold pb-1 text-[#D05A05]'>Assingment:</span>
          <LatexRenderer value={exercise.description}/>
          {hints.length === 0 && <div className='flex justify-end'>
            {loading ?<LoadingButton/>
            :
            <TextButton onClick={handleGetHints} className='font-bold bg-[#2E1004] text-[#D05A05]'>
              Get Hints
            </TextButton>
            }
          </div>}
          {hints.length > 0 && 
          <><div className='font-bold'>Hints:</div>
            {hints.slice(0,hintCount+1).map((line, i) => (
              <LatexRenderer key={i} value={line} />
            ))}
          </>}
          { hintCount<hints.length-1 && hintCount!==0 && 
          <TextButton onClick={()=> {
              setHintCount(hintCount+1)
              setDisableHintsButton(true)
              setTimeout(setDisableHintsButton(false),100000)
            }} buttonstyle={disableHintsButton ? 'disabled' : ''}
            className='font-bold bg-[#2E1004] text-[#D05A05]'>
            Next Hint
          </TextButton>
          }
        </CardBody>
      </div>
      }
      <div className={`p-2 w-full`}>
        {messages.length > 0 ? <ChatBox messages={messages}/> : <></>}
      </div>
    <div className='flex p-2 w-full'>
        <CardBody>
            <TextInput placeholder='Ask a question' messages={messages} setMessages={setMessages} loading={loading} onClick={sendMessage}/>
        </CardBody>
      </div>
    </Card>
  )
}

export default Chat
  