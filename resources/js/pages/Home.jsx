import { useEffect, useState } from 'react'
import Players from '../components/Players';

const defaultPlayer = {
	steamId: null,
	found: false
};

export default function Home() {

	const [players, setPlayers] = useState([
		{...defaultPlayer, id:1},
		{...defaultPlayer, id:2}
	]);

	// useEffect(() => {
	// 	console.log(players);
	// }, [players]);

	return <main className="Home">
		<Players players={players} setPlayers={setPlayers} defaultPlayer={defaultPlayer}/>
	</main>
}
