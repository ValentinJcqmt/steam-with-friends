import React, { useState } from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import '../css/app.scss';

import AppLayout from './components/Layout';

import Error from './pages/Error';

function App() {

	const [router] = useState(createBrowserRouter([
		{
			element: <AppLayout />,
			id: "root",
			errorElement: <Error />,
			children: [
				{
					path: "",
					element : <>Hello World</>
				},
				{
					path: "my-other-page",
					element : <>Another Hello World</>
				},
			]
		}
	]));

	return <RouterProvider router={router} />;
}

createRoot(document.querySelector("#react-root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);