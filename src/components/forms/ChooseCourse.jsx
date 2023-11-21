import { DropDown } from "../ui/dropdowns/DropDown"
import PropTypes from 'prop-types'

export const ChooseCourse = ({ courses }) => {
  
  return (
      <DropDown id='coursePicker' label="Course">
        <div className="space-y-2">
          {courses.map((course, index) => (
            <span
              key={index}
              className={`block px-4 py-2 hover:text-background hover:border hover:bg-primary rounded-lg cursor-pointer`}
              onClick={() => {
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

export const ChooseExercise = ({exercises, handleclick, setExercise}) => {
  return(
    <DropDown id = 'exercisePicker' label="Exercise" exercises={exercises}>
      <div className="space-y-2">
        {exercises.map((exercise, index) => (
          <span
            key={index}
            className={`block px-4 py-2 hover:text-secondary rounded-lg cursor-pointer`}
            onClick={() => {
              setExercise(exercise)
              handleclick()
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

ChooseCourse.propTypes = {
  courses: PropTypes.array,
  handleclick: PropTypes.func,
  setCourse: PropTypes.func,
  chosenCourse: PropTypes.string
}

ChooseExercise.propTypes = {
  exercises: PropTypes.array,
  handleclick: PropTypes.func,
  setExercise: PropTypes.func
}