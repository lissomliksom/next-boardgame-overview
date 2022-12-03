import BoardgameCardList from './BoardGameCardList'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

export default function BoardgameCard({ boardgame }) {
  return(
    <article className="rounded shadow p-2 divide-y my-10 bg-white">

      <div className="px-5 py-2">
        <h2 className="font-bold">{boardgame.name}</h2>
      </div>
      
      <BoardgameCardList 
        title="Eier"
        icon={<StarSolid className="h-5 w-5 text-emerald-500" />}
        data={boardgame.gameList}
      />

      <BoardgameCardList
        title="Vil spille"
        icon={<StarOutline className="h-5 w-5 text-yellow-500" />}
        data={boardgame.wishList}
      />

    </article>
  )
}