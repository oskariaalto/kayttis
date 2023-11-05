import Chat from './components/Chat';
import { useState, useEffect } from 'react';
import NavBar from './components/ui/navbars/NavBar';
import History from './components/History';
import Profile from './components/Profile';
import { getUser } from './controllers/user.js'


const App = () => { 
  const [view, setView] = useState("chat")
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([])
  const [title, setTitle]  = useState("New Chat")
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState({});
  const [messages, setMessages] = useState([])
  const [QuestionState, setQuestionState] = useState(0);
  const [history, setHistory] = useState([])
  const [user, setUser] = useState({})

  useEffect(()=>{
    getUser().then((newUser)=> {
      setUser(newUser)
      const cour = newUser.userCourses.map((c)=> c.course)
      console.log(cour)
      setCourses(cour)
    })
  },[])

  const setChatView = () => {
    setView("chat")
    setQuestionState(0)
    setExercise({})
    setTitle("New Chat")
    setCourse("")
    setExercises([])
  }

  const setHistoryView = () => {
    console.log(history)
    setView("history")
  }

  const setProfileView = () => {
    setView("profile")
  }

  return(
    <div className='w-full min-h-screen bg-[#94a3b8]'>
        <div className='px-0.5'>
          <NavBar setChatView={setChatView} setHistoryView={setHistoryView} setProfileView={setProfileView}/>
        </div>
        <div className='flex justify-center pt-3'>
          <div className='flex justify-center w-3/4'>
            {view === "chat" ? <Chat course={course} setCourse={setCourse}
              exercises={exercises} setExercises={setExercises} exercise={exercise} setExercise={setExercise}
              messages={messages} setMessages={setMessages} QuestionState={QuestionState}
              setQuestionState={setQuestionState} setHistory={setHistory} history={history} title={title} setTitle={setTitle} courses={courses}/>
              : null} 
            {view === "history" ? <History course={course} setCourse={setCourse}
              exercises={exercises} setExercises={setExercises} exercise={exercise} setExercise={setExercise}
              messages={messages} setMessages={setMessages} QuestionState={QuestionState}
              setQuestionState={setQuestionState} setHistory={setHistory} history={history} setChatView={setChatView} />
              : null} 
            {view === "profile" ? <Profile/> : null} 
          </div>
        </div>
    </div>
  )
}

export default App;
