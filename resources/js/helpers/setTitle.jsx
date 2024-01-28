import clsx from 'clsx';

export default function setTitle(title){
	document.title = clsx(title && (title+" - ")) + import.meta.env.VITE_APP_NAME;
}