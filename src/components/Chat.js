import Card from './ui/cards/Card';
import CardTitle from './ui/cards/CardTitle';
import CardBody from './ui/cards/CardBody';
import { TextInput } from './forms/TextInput';
import { ChooseCourse } from './forms/ChooseCourse';
import { ChooseExercise } from './forms/ChooseCourse';
import React, { useState } from 'react';
import ChatBox from './ui/chatbox/Chatbox';

export const Chat = ({ course, setCourse, exercises, setExercises, exercise, setExercise,
  messages, setMessages, QuestionState, setQuestionState, history, setHistory, chatId, setChatId }) => {

  const CourseExerciseMap = new Map([
    ["Data Structures and Algorithms", ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "2.4"]],
    ["Differentiaali- ja integraalilaskenta 1", ["1.1", "1.2", "1.3", "1.4", "2.1", "2.2", "2.3", "3.1", "3.2"]]
  ]);

  const courses = Array.from(CourseExerciseMap.keys())

  const Conversation = () => {
    setQuestionState(3)
  }

  const FormNewQuestionExercise = () => {
    setQuestionState(2)
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
    setCourse("")
    setExercise("")
    setMessages([])
    setChatId(history.length+1)
  }

  const UpdateCourse = (course) => {
    setCourse(course)
    setExercises(CourseExerciseMap.get(course))
  }
  
// items-center  justify-center <div className='flex w-full h-full'>
  return (
    <Card>
      <div className='flex h-1/5 w-full'>
        <div className='flex justify-start p-1 h-full w-1/5'>
          <button onClick={FormNewQuestionCourse}> <CardTitle cardstyle='primary' >New chat</CardTitle> </button>
        </div>
        <div className='flex justify-center p-1 h-full w-1/2'>
          <ChooseCourse handleClick={FormNewQuestionExercise} courses={courses} setCourse={UpdateCourse} chosenCourse={course} />
        </div>
        <div className='flex justify-start p-1 h-full w-3/10'>
          {QuestionState >= 2 ? <ChooseExercise handleClick={Conversation} exercises={exercises} setExercise={setExercise} chosenExercise={exercise} /> : <></>}
        </div>
      </div>
      <div className='p-1 h-3/5 w-full'>
        {messages.length > 0 && QuestionState >= 2 ? <ChatBox messages={messages}/> : <></>}
      </div>
      <div className='flex p-1 h-1/5 w-full'>
        {QuestionState >= 2 ?
          <CardBody>
            <TextInput placeholder='Ask a question' messages={messages} setMessages={setMessages} />
          </CardBody>
          : <></>}
      </div>
    </Card>
  )
}

export default Chat
  