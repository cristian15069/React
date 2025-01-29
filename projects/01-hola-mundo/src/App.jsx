import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

function App() {
  return (
    <section className="App">
      {
        users.map(({userName , name , isFollowing}) => (
          <TwitterFollowCard 
          key={userName}
          userName={userName}
          isFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
