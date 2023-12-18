
import '../../css/components/AppLayout.scss';
import { Outlet, useLocation } from "react-router-dom";
import clsx from 'clsx';

export default function AppLayout({children}){

	const location = useLocation();

	return <div className={clsx("appLayout", (location.pathname == "/") && "lightBgd")}>
		<div className="appLayout__content">
			<Outlet />
			{children}
		</div>
	</div>;
}