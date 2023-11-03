import Chat from './components/Chat';
import { useState } from 'react';
import NavBar from './components/ui/navbars/NavBar';
import History from './components/History';
import Profile from './components/Profile';


const App = () => { 
  const [view, setView] = useState("chat")
  const [course, setCourse] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState("");
  const [messages, setMessages] = useState([])
  const [QuestionState, setQuestionState] = useState(0);
  const [chatId, setChatId] = useState(1)
  const [history, setHistory] = useState([])

  const setChatView = () => {
    setView("chat")
  }

  const setHistoryView = () => {
    console.log(history)
    setView("history")
  }

  const setProfileView = () => {
    setView("profile")
  }

  return(
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='flex w-3/4 h-3/4'>
        <div className='flex w-1/4'>
          <NavBar setChatView={setChatView} setHistoryView={setHistoryView} setProfileView={setProfileView}/>
        </div>
        <div className='flex w-full h-full'>
          {view === "chat" ? <Chat course={course} setCourse={setCourse}
            exercises={exercises} setExercises={setExercises} exercise={exercise} setExercise={setExercise}
            messages={messages} setMessages={setMessages} QuestionState={QuestionState}
            setQuestionState={setQuestionState} setHistory={setHistory} history={history} chatId={chatId} setChatId={setChatId} />
            : null} 
          {view === "history" ? <History course={course} setCourse={setCourse}
            exercises={exercises} setExercises={setExercises} exercise={exercise} setExercise={setExercise}
            messages={messages} setMessages={setMessages} QuestionState={QuestionState} chatId={chatId}
            setQuestionState={setQuestionState} setHistory={setHistory} history={history} setChatView={setChatView} setChatId={setChatId} />
            : null} 
          {view === "profile" ? <Profile/> : null} 
        </div>
      </div>
    </div>
  )
}

export default App;
