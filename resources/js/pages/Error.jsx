import '../../css/pages/Error.scss';
import { useRouteError } from "react-router-dom"
import { useEffect, useState } from "react";
import setTitle from "../helpers/setTitle";

export default function Error(){

	const errorObject = useRouteError();

	const [errorTitle, setErrorTitle] = useState(false)
	const [errorContent, setErrorContent] = useState(false)

	useEffect(() => {
		
		if( errorObject && "error" in errorObject ){
			setTitle(errorObject.statusText);
			setErrorTitle(`${errorObject.status} - ${errorObject.statusText}`);
			setErrorContent(<>
				<p>{errorObject.data}</p>
				<pre>{errorObject.error.stack}</pre>
			</>);
			console.error(errorObject.error);
		} else {
			setTitle("Erreur");
			setErrorTitle(errorObject.message)
			setErrorContent(<pre>{errorObject.stack}</pre>);
			console.error(errorObject);
		}
	}, [])

	return <main className="errorPage">
		{ errorTitle &&
			<h1 className="errorPage__title">
				{errorTitle}
			</h1>
		}
		{ errorContent &&
			<p className="errorPage__message">
				{errorContent}
			</p>
		}
	</main>
}