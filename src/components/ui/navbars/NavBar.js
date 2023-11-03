
const NavBar = ({setChatView, setHistoryView, setProfileView}) => {
  return (
    <div className='w-full'>
      <nav className="bg-neutral-500 p-4 shadow-xl rounded-xl rounded-tr-none w-4/10">
        <ul className="space-y-4">
          <li><a href="#" className="text-white" onClick={setChatView}>Chat</a></li>
          <li><a href="#" className="text-white" onClick={setHistoryView}>Chat history</a></li>
          <li><a href="#" className="text-white" onClick={setProfileView}>Profile settings</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;

