import "./post.css"
export default function Post({img}) {
  return (
    <div className="post" >
      <img className="postImg" src={img} alt="" />
      <div className="postContent">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Nice</span>
      </div>
      <span className="postTitle">Lorem, ipsum dolor sit amet</span>
      <span className="postDate">1 Hour ago</span>
      <hr />

      <p className="postDesc">Lorem ipsum, 
      dolor sit amet consectetur adipisicing elit. 
      Ut nobis expedita quas. Ducimus, ullam qui optio vel omnis impedit officiis at, 
      tenetur cum necessitatibus sequi architecto, vitae totam ex molestiae!
      </p>
      </div>
      </div>
  )
}
