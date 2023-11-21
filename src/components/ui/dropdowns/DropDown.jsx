/*export const DropDown = ({onChange, courses, data, label, handleClick, ...props}) => {
  return(
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="cursor-pointer text-gray-500 hover:text-black text-lg">{label}</label>
      <div tabIndex={0} className="shadow z-[100] menu dropdown-content bg-gray-200 border border-black rounded-box w-52 text-black" {...props}/>
      </div>  
  )
}*/
import PropTypes from 'prop-types'

export const DropDown = ({ label, ...props }) => {
  return (
    <div className="dropdown" >
      <label tabIndex={0}
        className={`cursor-pointer text-xl py-1.5 px-3 rounded-lg text-secondary hover:text-primary hover:bg-secondary`}>
        {label}
      </label>
      <div
        tabIndex={0}
        className={`shadow z-[100] menu dropdown-content bg-background border border-primary rounded-box w-52 text-primary`}
        {...props}
      >
      </div>
    </div>
  );
};

DropDown.propTypes = {
  onChange: PropTypes.func,
  courses: PropTypes.array,
  data: PropTypes.array,
  label: PropTypes.string,
};
