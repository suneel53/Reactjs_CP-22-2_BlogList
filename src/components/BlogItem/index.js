// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="list-cont">
      <div className="head-cont">
        <h1 className="list-head">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="list-des">{description}</p>
    </li>
  )
}

export default BlogItem
