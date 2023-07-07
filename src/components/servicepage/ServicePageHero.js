import Link from "next/link";

export default function ServicePageHero({ title, text }) {
	return (
		<div className="absolute bg-blend-multiply z-10 top-0 mt-0 md:mt-12t translate-y-[5%] md:translate-y-[20%] md:w-3/4 max-w-4xl mx-auto">
			<div className="px-4 mt-12 mx-auto max-w-screen-xl text-center">
				<div className="bg-black/50 p-5 pb-2">
					<h1 className="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="my-8 text-md md:text-lg font-normal text-gray-100 lg:text-xl sm:px-16">
						{text}
					</p>
				</div>

				<div className="flex flex-row gap-8 justify-evenly mt-4 sm:flex-row sm:justify-center sm:space-x-4">
					<Link
						href="tel:+381607225558"
						className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 md:w-48 w-[40%]"
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
					<Link
						href="/usluge"
						className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 md:w-48 w-[40%]"
					>
						Sve usluge
					</Link>
				</div>
			</div>
		</div>
	);
}
