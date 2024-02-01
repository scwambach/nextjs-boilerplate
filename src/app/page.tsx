import { Avatar } from '@components/modules'
import { repeater } from '@utils/repeater'

export default function Home() {
  return (
    <main>
      <div className="container wide">
        {repeater(
          3,
          <Avatar
            key={Math.random()}
            size={5}
            firstName="Scott"
            lastName="Wambach"
          />
        )}
      </div>
    </main>
  )
}
