import { DropDown } from "../ui/dropdowns/DropDown"

export const ChooseCourse = ({ courses, onChange, handleClick, setCourse, chosenCourse }) => {
  
  return (
      <DropDown id='coursePicker' label={chosenCourse || "Choose course"} courses={courses} handleClick={handleClick}>
        <div className="space-y-2">
          {courses.map((course, index) => (
            <span
              key={index}
              className={`block px-4 py-2 hover:text-secondary rounded-lg cursor-pointer`}
              onClick={() => {
                handleClick()
                setCourse(course)
                handleClick()
              }
            } 
          >
            {course.name}
          </span>
        ))}
      </div> 
    </DropDown>
  )
}

export const ChooseExercise = ({exercises, onChange, handleClick, setExercise}) => {
  return(
    <DropDown id = 'exercisePicker' label="Exercise" exercises={exercises} handleClick={handleClick}>
      <div className="space-y-2">
        {exercises.map((exercise, index) => (
          <span
            key={index}
            className={`block px-4 py-2 hover:text-secondary rounded-lg cursor-pointer`}
            onClick={() => {
              setExercise(exercise)
              handleClick()
              }
            }
          >
            {exercise.name}
          </span>
        ))}
      </div> 
    </DropDown>
  )
}