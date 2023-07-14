import Link from "next/link";
import { VscArrowLeft } from "react-icons/vsc";

export default function ServicePageHero({ title, text }) {
	return (
		<>
			<div className="absolute w-full bg-white text-lightbrown hover:text-black drop-shadow-2xl flex items-center pl-4">
				<VscArrowLeft className="hover:fill-black" />
				<Link
					href="/usluge"
					className="inline-flex justify-center items-center py-3 pl-2 text-base font-medium text-center "
				>
					Nazad na sve usluge
				</Link>
			</div>

			<div className="absolute bg-blend-multiply z-10 top-0 translate-y-[40%] text-center lg:max-w-[80%]">
				<div className="bg-black/50 p-5 lg:p-10 mx-6 md:mx-auto md:w-3/4">
					<h1 className="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="my-8 text-md md:text-lg font-normal text-gray-100 lg:text-xl sm:px-16">
						{text}
					</p>
				</div>

				<div className="flex flex-col items-center md:flex-row gap-4 md:gap-8 justify-evenly mt-4 sm:flex-row sm:justify-center sm:space-x-4 mx-auto w-3/4">
					<Link
						href="tel:+381607225558"
						className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full md:w-48"
					>
						Naručite uslugu
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</Link>
				</div>
			</div>
		</>
	);
}
