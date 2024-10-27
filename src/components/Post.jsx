import { useState } from "react"

function Post({ post, isDarkTheme, toggleTheme }) {

    // const [isDarkTheme, setisDarkTheme] = useState(false)

    // const toggleTheme = () => {
    //   setisDarkTheme(theme => !theme)
    // }

  return (
    <div onClick={toggleTheme} className={`post ${isDarkTheme ? 'dark' : ''}`}>
      <p className="title">{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
export default Post