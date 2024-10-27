import { useState } from "react"

function Posts() {
  
  const [posts] = useState([
    {
      id: 1,
      title: 'post 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea porro saepe maxime omnis quas quam unde, exercitationem odio totam doloremque commodi similique praesentium odit necessitatibus minima. Eos, est aspernatur.'
    },
    {
      id: 2,
      title: 'post 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea porro saepe maxime omnis quas quam unde, exercitationem odio totam doloremque commodi similique praesentium odit necessitatibus minima. Eos, est aspernatur.'
    },
    {
      id: 3,
      title: 'post 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea porro saepe maxime omnis quas quam unde, exercitationem odio totam doloremque commodi similique praesentium odit necessitatibus minima. Eos, est aspernatur.'
    },
    {
      id: 4,
      title: 'post 4',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea porro saepe maxime omnis quas quam unde, exercitationem odio totam doloremque commodi similique praesentium odit necessitatibus minima. Eos, est aspernatur.'
    },
    {
      id: 5,
      title: 'post 5',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea porro saepe maxime omnis quas quam unde, exercitationem odio totam doloremque commodi similique praesentium odit necessitatibus minima. Eos, est aspernatur.'
    },
  ])

  const [isDarkTheme, setisDarkTheme] = useState(true)

  const toggleTheme = () => {
    setisDarkTheme(theme => !theme)
  }



  return (
    <div className="Posts">

      {
        Posts.length > 0 && posts.map(post => (
          <post key={post.id} post={post} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        // <div key={post.id} onClick={toggleTheme} className={`post ${isDarkTheme ? 'dark' : ''}`}>
        //   <p className="title">{Post.title}</p>
        //   <p>{post.body}</p>
        // </div>
        ))
      }
      
    </div>
  );
}
export default Posts;