const buttonStyles = {
  primary: '',
}

export const IconButton = ({buttonstyle,onClick, ...props}) => {
  return(
    <button className={buttonStyles[buttonstyle || 'primary']} onClick={onClick} {...props}/>
  )}