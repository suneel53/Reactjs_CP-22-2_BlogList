// Write your JS code here
import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogItem-cont">
      {blogsList.map(eachValue => (
        <BlogItem details={eachValue} key={eachValue.id} />
      ))}
    </ul>
  )
}

export default BlogList
