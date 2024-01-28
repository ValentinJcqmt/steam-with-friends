import { useCallback } from "react"
import PlayerCard from "./PlayerCard"
import '../../css/components/Players.scss'

function Players({players, setPlayers, defaultPlayer}) {

	const handleAddPlayerClick = useCallback(e => {
		e.preventDefault();
		setPlayers(prevPlayers => [...prevPlayers, {...defaultPlayer, id:prevPlayers.length}])
	}, [setPlayers])

	return <div className="Players">
		{ players.map(player => <PlayerCard key={player.id} currentPlayer={player} setPlayers={setPlayers}/>) }
		<button type="button" title="Add player" className="Players__add" onClick={handleAddPlayerClick}>
			<span className="Players__add__icon"></span>
		</button>
	</div>
}

export default Players