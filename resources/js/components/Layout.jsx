
import '../../css/components/AppLayout.scss';
import { Outlet, useLocation } from "react-router-dom";

export default function AppLayout({children}){

	// const location = useLocation();

	return <div className="appLayout">
		<div className="appLayout__content">
			<Outlet />
			{children}
		</div>
	</div>;
}