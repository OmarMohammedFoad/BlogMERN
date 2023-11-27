import "./sideBar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sideBarItem">
    <span className="sidebarTitle">ABOUT ME</span>
     <img src="https://www.blexar.com/avatar.png" alt="" />
     <p>Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Et sequi commodi iusto quis dolores fugit, 
      eveniet ratione doloremque nulla obcaecati, laborum quibusdam 
      adipisci nam tenetur velit voluptate! Magnam, numquam enim.
     </p>
    </div>
    <div className="sideBarItem">
    <span className="sidebarTitle">CATEGORIES</span>
        
        <ul className="sideBarList">
          <li className="sideBarListItem">Cinema</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Life</li>
        </ul>
      <div></div>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}