import { useCallback, useEffect, useState } from "react";
import '../../css/components/PlayerCard.scss';

function PlayerCard({currentPlayer, setPlayers}){

	const [profileSearch, setProfileSearch] = useState('');

	const handleDeleteClick = useCallback(e => {
		e.preventDefault();
		setPlayers(prevPlayers => prevPlayers.filter(player => player.id != currentPlayer.id));
	}, [setPlayers]);

	const handleProfileIDSubmit = useCallback(e => {
		e.preventDefault();
		alert(profileSearch);
	}, [profileSearch]);

	return <div className="PlayerCard">
		{ ('userId' in currentPlayer && currentPlayer.userId != null)
			? <>
				{currentPlayer.userId}
			</>
			: <>
				<form onSubmit={handleProfileIDSubmit} className="PlayerCard__form">
					<label className="PlayerCard__form__label" htmlFor={"input-"+currentPlayer.id}>
						Insert a steam profile ID
					</label>
					<div className="PlayerCard__form__search">
						<input className="PlayerCard__form__search__input"
							id={"input-"+currentPlayer.id}
							type="text"
							placeholder="..."
							value={profileSearch}
							onChange={e => setProfileSearch(e.target.value)}
							name="steam_profile_id" />
						<button className="PlayerCard__form__search__submit"
							type="submit"
							title="Submit"
						></button>
					</div>
				</form>
			</>
		}
		<button type="button"
			className="PlayerCard__remove"
			title="Remove player"
			onClick={handleDeleteClick}
		></button>
	</div>
}

export default PlayerCard;