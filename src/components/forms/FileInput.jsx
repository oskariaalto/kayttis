import PropTypes from 'prop-types'

const buttonStyle = {
  primary: "cursor-pointer",
}



export const FileInput = ({ styleButton,onClick, ...props }) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <label className={buttonStyle[styleButton || 'primary']} {...props} htmlFor='file-upload'/>
      <input id="file-upload" type="file" className="hidden" onClick={onClick}/>
    </div>
  )
}


FileInput.propTypes = {
  styleButton: PropTypes.string,
  onClick: PropTypes.func
}

