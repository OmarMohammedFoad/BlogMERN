import "./topbar.css"
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topleft">
      <i class="topIcon fa-brands fa-facebook"></i>
      <i class="topIcon fa-brands fa-square-instagram"></i>
      <i class="topIcon fa-brands fa-square-twitter"></i>
      <i class="topIcon fa-solid fa-camera"></i>
      </div>
      <div className="topcenter">
      <ul className="toplist">
          <li className="toplistitem">Home</li>
          <li className="toplistitem">About</li>
          <li className="toplistitem">Contact</li>
          <li className="toplistitem">Write</li>
          <li className="toplistitem">Login</li>
        </ul>
      </div>
      <div className="topright">
        <img src="https://www.blexar.com/avatar.png"
             className="topImage" alt="" />
             <i class="topRightIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
