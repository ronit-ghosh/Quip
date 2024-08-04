import quip from "../images/quip.svg"

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="wrapper fixed top-0 z-10 navbar bg-base-100">
        <div className="flex-1">
          <a className=""><img src={quip} alt="logo" className="w-8" /></a>
          <a className="font-bold text-[#7480ff] text-xl">uip</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <button className="btn text-base">Logout</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
