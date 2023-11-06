
const NavBar = ({setChatView, setHistoryView, setProfileView}) => {
  return (
    <div className={`navbar bg-background`}>
      <div className="navbar-start">
        <div className={`dropdown text-primary`}>
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-background border border-primary rounded-box w-52`}>
            <li><span className={`hover:text-secondary`} onClick={setChatView}>Homepage</span></li>
            <li><span className={`hover:text-secondary`} onClick={setHistoryView}>History</span></li>
            <li><span className={`hover:text-secondary`}>About</span></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <span className={`btn btn-ghost normal-case text-2xl text-secondary`} onClick={setChatView}>AIbert</span>
      </div>
    </div>
  )
}

export default NavBar;

