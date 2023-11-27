import Sidebar from '../../components/SideBar/SideBar'
import Posts from '../../components/posts/Posts'
import "./home.css"
export default function Single() {
  return (
    <div className='Home'>
      <Posts/>
      <Sidebar/>
    </div>
  )
}
