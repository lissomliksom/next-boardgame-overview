import { useMemo } from 'react'
import BoardgameCard from './BoardgameCard.jsx'
import { boardgames } from '../data.js'

export default function Boardgames({ searchPhrase }) {

  const filteredBoardgames = useMemo(() => {
    return boardgames.filter(boardgame => boardgame.name.toLowerCase().includes(searchPhrase))
  }, [searchPhrase])

  return(
    <section>
      <div className="mx-auto">

        {filteredBoardgames.map((boardgame, index) => (
          <BoardgameCard
            key={index}
            boardgame={boardgame}
          />
        ))}

      </div>
    </section>
  )
}