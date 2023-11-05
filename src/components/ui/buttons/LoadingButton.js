const buttonStyles = {
  primary: 'bg-blue-500 text-white font-bold py-2 px-4 rounded align-middle w-[104.5px]',
}

export const LoadingButton = ({buttonstyle, ...props}) => {
  return(
    <button className={buttonStyles[buttonstyle || 'primary']}>
        <span className="loading loading-spinner"></span>
    </button>
  )}