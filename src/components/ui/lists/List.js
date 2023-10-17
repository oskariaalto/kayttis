const listStyles = {
  primary: 'list-disc list-inside text-gray-700',
  dropdown: 'dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
}

export const List = ({liststyle, ...props}) => {
  return(
    <ul className={listStyles[liststyle || 'primary']} {...props}/>
  )
}