import Sidebar from '../../components/SideBar/SideBar'
import Posts from '../../components/posts/Posts'
import Header from '../../components/Header/Header'
import "./home.css"
export default function Home() {
  return (
    <>
    <Header/> 
    <div className='Home'>
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}
