import { DropDown } from "../ui/dropdowns/DropDown"


export const ChooseCourse = ({courses, onChange, handleClick, setCourse}) => {
  return(
    <DropDown id = 'coursePicker' label="Course" courses={courses} handleClick={handleClick}>
      <div className="space-y-2">
        {courses.map((course) => (
          <a
            key={course}
            href="#"
            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            onClick={(e) => {
                handleClick()
                setCourse(course)
              }
            } 
          >
            {course}
          </a>
        ))}
      </div> 
    </DropDown>
  )
}

export const ChooseExercise = ({exercises, onChange, handleClick, setExercise}) => {
  return(
    <DropDown id = 'exercisePicker' label="Exercise" exercises={exercises} handleClick={handleClick}>
      <div className="space-y-2">
        {exercises.map((exercise) => (
          <a
            key={exercise}
            href="#"
            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            onClick={(e) => {
              handleClick()
              setExercise(exercise)
              }
            }
          >
            {exercise}
          </a>
        ))}
      </div> 
    </DropDown>
  )
}