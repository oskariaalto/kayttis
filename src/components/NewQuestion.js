import Card from './ui/cards/Card';
import CardTitle from './ui/cards/CardTitle';
import CardBody from './ui/cards/CardBody';
import { TextInput } from './forms/TextInput';
import { ChooseCourse } from './forms/ChooseCourse';
import { ChooseExercise } from './forms/ChooseCourse';
import React, { useState } from 'react';

export const NewQuestion = () => {

  const CourseExerciseMap = new Map([
    ["Data Structures and Algorithms", ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "2.4"]],
    ["Differentiaali- ja integraalilaskenta 1", ["1.1", "1.2", "1.3", "1.4", "2.1", "2.2", "2.3", "3.1", "3.2"]]
  ]);

  const courses = Array.from(CourseExerciseMap.keys())

  const [course, setCourse] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState("");

  const [QuestionState, setQuestionState] = useState(0);

  const Conversation = () => {
    setQuestionState(3)
  }

  const FormNewQuestionExercise = () => {
    setQuestionState(2)
  }

  const FormNewQuestionCourse = () => {
    setQuestionState(1)
  }

  const UpdateCourse = (course) => {
    setCourse(course)
    setExercises(CourseExerciseMap.get(course))
  }

  return(
    <Card>
      <div className='flex'>
        <div className='w-7/12'>
          <button onClick={FormNewQuestionCourse}> <CardTitle cardstyle='primary' >New Question</CardTitle> </button>
        </div>
        {QuestionState === 1 ? <ChooseCourse handleClick={FormNewQuestionExercise} courses={courses} setCourse={UpdateCourse} /> : <></>}
        {QuestionState === 2 ? <ChooseExercise handleClick={Conversation} exercises={exercises} setExercise={setExercise} /> : <></>}
      </div>
      {QuestionState === 3 ?
        <CardBody> 
          <TextInput placeholder='Ask a question' /> 
        </CardBody>
        : <></>
      }
    </Card>
  )
}
  
// <TextButton onClick={()=>setNewQuestion(true)}>New Question</TextButton>
// <TextInput placeholder='Continue previous question' setNewQ={ContinueQuestion} />




  