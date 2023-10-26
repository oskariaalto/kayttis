const buttonStyles = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  disabled: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled'
}

export const TextButton = ({buttonstyle, ...props}) => {
  return(
    <button className={buttonStyles[buttonstyle || 'primary']} {...props}/>
  )}
