import { useState } from "react"
import { DropDown } from "../ui/dropdowns/DropDown"


export const ChooseCourse = ({ courses, onChange, handleClick, setCourse, chosenCourse }) => {
  
  return (
    <div>
      <DropDown id='coursePicker' label={chosenCourse || "Choose course"} courses={courses} handleClick={handleClick}>
        <div className="space-y-2">
          {courses.map((course, index) => (
            <span
              key={index}
              href="#"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer"
              onClick={() => {
                handleClick()
                setCourse(course)
              }} 
            >
              {course.name}
            </span>
          ))}
        </div> 
      </DropDown>
    </div>
  )
}

export const ChooseExercise = ({exercises, onChange, handleClick, setExercise, chosenExercise}) => {
  return (
    <div className='pl-10'>
      <DropDown id='exercisePicker' label={chosenExercise || "Choose exercise"} exercises={exercises} handleClick={handleClick}>
        <div className="space-y-2">
          {exercises.map((exercise, index) => (
            <span
              key={index}
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer"
              onClick={() => {
                handleClick()
                setExercise(exercise)
              }}
            >
              {exercise.name}
            </span>
          ))}
        </div> 
      </DropDown>
    </div>
  )
}