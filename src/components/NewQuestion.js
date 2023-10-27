import Card from './ui/cards/Card';
import CardTitle from './ui/cards/CardTitle';
import CardBody from './ui/cards/CardBody';
import { TextInput } from './forms/TextInput';
import { ChooseCourse } from './forms/ChooseCourse';
import { ChooseExercise } from './forms/ChooseCourse';
import { useState } from 'react';
import LatexRenderer from './RenderMarkdown';
import { TextButton } from './ui/buttons/TextButton';

const readFile = async (filename) => {
  const file = await fetch(filename)
  const data = await file.text()
  return data
}

export const NewQuestion = () => {

  const pathname = window.location.pathname

  const CourseExerciseMap = pathname!=="/test"  ? new Map([
    ["Data Structures and Algorithms", ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "2.4"]],
    ["Differentiaali- ja integraalilaskenta 1", ["1.1", "1.2", "1.3", "1.4", "2.1", "2.2", "2.3", "3.1", "3.2"]]
  ]): new Map([["Data Structures and Algorithms", ["1.1"]],["Differentiaali- ja integraalilaskenta 1", ["1.1"]]])

  const courses = Array.from(CourseExerciseMap.keys())
  const [title, setTitle] = useState("New Question");

  const [course, setCourse] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState("");
  const [fileContent, setFileContent] = useState("")
  const [hintCount, setHintCount] = useState(0) 

  const [QuestionState, setQuestionState] = useState(0);

  const Conversation = async () => {
    try{
      setQuestionState(3)
      setTitle(course)
      console.log(exercise)
      if(pathname === '/test'){
        const dat = await readFile(course === "Data Structures and Algorithms" ? "data/code.txt" : "data/math.txt")
        setFileContent(dat.split("\n"))
      }
    } catch (error){
      console.log(error)
    }
  }

  const FormNewQuestionExercise = () => {
    setQuestionState(2)
  }

  const FormNewQuestionCourse = () => {
    setTitle("New Question")
    setQuestionState(1)
  }

  const UpdateCourse = (course) => {
    setCourse(course)
    setExercises(CourseExerciseMap.get(course))
  }

  const newHint = () => {
    setHintCount(hintCount+1)
  }

  return(
    <Card>
      <div className='flex'>
        <div className='w-7/12'>
          <button onClick={FormNewQuestionCourse}> <CardTitle cardstyle='primary' >{title}</CardTitle> </button>
        </div>
        {QuestionState === 1 ? <ChooseCourse handleClick={FormNewQuestionExercise} courses={courses} setCourse={UpdateCourse} /> : <></>}
        {QuestionState === 2 ? <ChooseExercise handleClick={Conversation} exercises={exercises} setExercise={setExercise} /> : <></>}
      </div>
      {QuestionState === 3 ?
        <CardBody> 
        {pathname==='/test' && 
          <div className='text-black pb-3 px-2'>
            <div className='pb-1'>
              <div className='font-bold'>Assingment:</div>
              {fileContent  && <LatexRenderer value={fileContent[0]} />}
            </div>
          {hintCount > 0 && 
          <><div className='font-bold'>Hints:</div>
            {fileContent.slice(1,hintCount+1).map((line, i) => (
              <LatexRenderer key={i} value={line} />
            ))}
          </>}
          { hintCount<fileContent.length-1 && hintCount!==0 && <TextButton onClick={()=> setHintCount(hintCount+1)}>Next Hint</TextButton>}
          </div>}
          <TextInput placeholder='Ask a question' onClick={newHint}/> 
        </CardBody>
        : <></>
      }
    </Card>
  )
}
  
// <TextButton onClick={()=>setNewQuestion(true)}>New Question</TextButton>
// <TextInput placeholder='Continue previous question' setNewQ={ContinueQuestion} />




  