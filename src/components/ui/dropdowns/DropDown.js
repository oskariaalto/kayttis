/*export const DropDown = ({onChange, courses, data, label, handleClick, ...props}) => {
  return(
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="cursor-pointer text-gray-500 hover:text-black text-lg">{label}</label>
      <div tabIndex={0} className="shadow z-[100] menu dropdown-content bg-gray-200 border border-black rounded-box w-52 text-black" {...props}/>
      </div>  
  )
}*/

export const DropDown = ({ onChange, courses, data, label, handleClick, ...props }) => {
  return (
    <div className="dropdown dropdown-hover w-10/10 rounded" >
      <label tabIndex={0}
        className={`cursor-pointer text-primary hover:text-secondary text-md`}>
        {label}
      </label>
      <div
        tabIndex={0}
        className={`shadow z-[100] menu dropdown-content bg-background border border-primary rounded-box w-52 text-primary`}
        style={{
          maxHeight: '200px',
          overflowY: 'auto',   
        }}
        {...props}
      >
      </div>
    </div>
  );
};
