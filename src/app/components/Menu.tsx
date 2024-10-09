import Link from "next/link";

const menu = [
	{
		name: 'List',
		url: 'list',
		icon: <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z" />
	</svg>
	},
	{
		name: 'Create',
		url: 'create',
		icon: <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path fill="currentColor" d="M10 20q-.825 0-1.412-.587T8 18t.588-1.412T10 16h10q.825 0 1.413.588T22 18t-.587 1.413T20 20zm0-6q-.825 0-1.412-.587T8 12t.588-1.412T10 10h10q.825 0 1.413.588T22 12t-.587 1.413T20 14zm0-6q-.825 0-1.412-.587T8 6t.588-1.412T10 4h10q.825 0 1.413.588T22 6t-.587 1.413T20 8zM4 8q-.825 0-1.412-.587T2 6t.588-1.412T4 4t1.413.588T6 6t-.587 1.413T4 8m0 6q-.825 0-1.412-.587T2 12t.588-1.412T4 10t1.413.588T6 12t-.587 1.413T4 14m0 6q-.825 0-1.412-.587T2 18t.588-1.412T4 16t1.413.588T6 18t-.587 1.413T4 20" />
	</svg>
	},
	{
		name: 'Order',
		url: 'order',
		icon: <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path fill="currentColor" d="M18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M7 9h10V7H7zm4.675 12H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v6.7q-.725-.35-1.463-.525T18 11q-.275 0-.513.012t-.487.063V11H7v2h6.125q-.45.425-.812.925T11.675 15H7v2h4.075q-.05.25-.062.488T11 18q0 .825.15 1.538T11.675 21M18 18q.625 0 1.063-.437T19.5 16.5t-.437-1.062T18 15t-1.062.438T16.5 16.5t.438 1.063T18 18m0 3q.75 0 1.4-.35t1.075-.975q-.575-.35-1.2-.513T18 19t-1.275.162t-1.2.513q.425.625 1.075.975T18 21" />
	</svg>
	},
	{
		name: 'Groups',
		url: 'groups',
		icon: <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path fill="currentColor" d="M17 15q-1.05 0-1.775-.725T14.5 12.5t.725-1.775T17 10t1.775.725t.725 1.775t-.725 1.775T17 15m-4 5q-.425 0-.712-.288T12 19v-.4q0-.6.313-1.112t.887-.738q.9-.375 1.863-.562T17 16t1.938.188t1.862.562q.575.225.888.738T22 18.6v.4q0 .425-.288.713T21 20zm-3-8q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 5.2q0-.85.425-1.562T3.6 14.55q1.5-.75 3.113-1.15T10 13q.875 0 1.75.15t1.75.35l-1.7 1.7q-.625.625-1.213 1.275T10 18v.975q0 .3.113.563t.362.462H4q-.825 0-1.412-.587T2 18z" />
	</svg>
	}
]

export default function Menu() {
	return (
		<div className="flex flex-col items-center w-full h-full overflow-hidden text-gray-400 bg-gray-900 shadow-lg">
			<a className="flex items-center w-full px-3 mt-3" href="#">
				<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10 0q-.825 0-1.412-.587T13 19v-5q0-.825.588-1.412T15 12h4q.825 0 1.413.588T21 14v5q0 .825-.587 1.413T19 21zm0-11q-.825 0-1.412-.587T13 8V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v3q0 .825-.587 1.413T19 10z" />
				</svg>
				<span className="ml-2 text-sm font-bold">The App</span>
			</a>
			<div className="w-full px-2">
				<div className="hidden flex flex-col items-center w-full mt-3 border-t border-gray-700">
					<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
						</svg>
						<span className="ml-2 text-sm font-medium">Dasboard</span>
					</a>
					<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
						</svg>
						<span className="ml-2 text-sm font-medium">Search</span>
					</a>
				</div>
				<div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
					{menu.map(menu=><Link key={menu.name} className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href={`/${menu.url}`}>
						{menu.icon}
						<span className="ml-2 text-sm font-medium">{menu.name}</span>
					</Link>)}
				</div>
				<div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
					<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24">
							<path fill="currentColor" fillRule="evenodd" d="M15.314 2a2 2 0 0 1 1.414.586l4.686 4.686A2 2 0 0 1 22 8.686v6.628a2 2 0 0 1-.586 1.414l-4.686 4.686a2 2 0 0 1-1.414.586H8.686a2 2 0 0 1-1.414-.586l-4.686-4.686A2 2 0 0 1 2 15.314V8.686a2 2 0 0 1 .586-1.414l4.686-4.686A2 2 0 0 1 8.686 2z" className="duoicon-secondary-layer" opacity="0.3" />
							<path fill="currentColor" fillRule="evenodd" d="M12 6a1 1 0 0 0-.993.883L11 7v6a1 1 0 0 0 1.993.117L13 13V7a1 1 0 0 0-1-1m0 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2" className="duoicon-primary-layer" />
						</svg>
						<span className="ml-2 text-md font-medium text-yellow-500 uppercase">Prototype</span>
					</a>
				</div>
			</div>
			<a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
				<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
				</svg>
				<span className="ml-2 text-sm font-medium">Account</span>
			</a>
		</div>
	)
}