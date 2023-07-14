import Image from "next/image";
import Link from "next/link";

import columnImage from "../../public/images/column.svg";
import brushImage from "../../public/images/brush.svg";
import kitchenImage from "../../public/images/kitchen-icon.svg";
import tilesImage from "../../public/images/tiles.png";

export default function Services() {
	return (
		<div className="mb-16">
			<div className="bg-gray-100">
				<div className="px-4 py-10 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
						<div>
							<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
								Brand new
							</p>
						</div>
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
							<span className="relative inline-block">
								<svg
									viewBox="0 0 52 24"
									fill="currentColor"
									className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
								>
									<defs>
										<pattern
											id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
											x="0"
											y="0"
											width=".135"
											height=".30"
										>
											<circle cx="1" cy="1" r=".7" />
										</pattern>
									</defs>
									<rect
										fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
										width="52"
										height="24"
									/>
								</svg>
								<span className="relative">The</span>
							</span>{" "}
							quick, brown fox jumps over a lazy dog
						</h2>
						<p className="text-base text-gray-700 md:text-lg">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</p>
					</div>
				</div>
			</div>
			<div className="relative px-4 sm:px-0">
				<div className="absolute inset-0 bg-gray-100 h-1/2" />
				<div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
					<Link
						href="vodoinstalaterske-usluge"
						className="inline-block p-8 text-center"
					>
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 hover:invert">
							<svg
								className="w-8"
								xmlns="http://www.w3.org/2000/svg"
								width="335.451"
								height="129.294"
								viewBox="0 0 335.451 129.294"
							>
								<path
									id="Water-Icon-SVG-3mcd"
									d="M285.259,118.406a23.629,23.629,0,0,0-33.369,0,33.772,33.772,0,0,1-47.714,0,23.629,23.629,0,0,0-33.369,0,33.755,33.755,0,0,1-47.7,0,23.638,23.638,0,0,0-33.377,0,33.764,33.764,0,0,1-47.706,0,23.6,23.6,0,0,0-33.369,0,5.064,5.064,0,0,1-7.165-7.158,33.708,33.708,0,0,1,47.7,0,23.634,23.634,0,0,0,33.384,0,33.77,33.77,0,0,1,47.7,0,23.625,23.625,0,0,0,33.376,0,33.77,33.77,0,0,1,47.7,0,23.616,23.616,0,0,0,33.369,0,33.787,33.787,0,0,1,47.713,0,23.6,23.6,0,0,0,33.369,0,5.064,5.064,0,1,1,7.165,7.158,33.714,33.714,0,0,1-47.706,0Zm0-50.669a23.6,23.6,0,0,0-33.369,0,33.785,33.785,0,0,1-47.714,0,23.6,23.6,0,0,0-33.369,0,33.768,33.768,0,0,1-47.7,0,23.612,23.612,0,0,0-33.377,0,33.777,33.777,0,0,1-47.706,0,23.563,23.563,0,0,0-33.369,0A5.069,5.069,0,0,1,1.49,60.565a33.708,33.708,0,0,1,47.7,0,23.634,23.634,0,0,0,33.384,0,33.768,33.768,0,0,1,47.7,0,23.625,23.625,0,0,0,33.376,0,33.768,33.768,0,0,1,47.7,0,23.616,23.616,0,0,0,33.369,0,33.785,33.785,0,0,1,47.713,0,23.6,23.6,0,0,0,33.369,0,5.069,5.069,0,1,1,7.165,7.172,33.716,33.716,0,0,1-47.706,0Zm0-50.692a23.616,23.616,0,0,0-33.369,0,33.785,33.785,0,0,1-47.714,0,23.616,23.616,0,0,0-33.369,0,33.768,33.768,0,0,1-47.7,0,23.625,23.625,0,0,0-33.377,0,33.777,33.777,0,0,1-47.706,0,23.6,23.6,0,0,0-33.369,0A5.064,5.064,0,0,1,1.49,9.887a33.708,33.708,0,0,1,47.7,0,23.634,23.634,0,0,0,33.384,0,33.77,33.77,0,0,1,47.7,0,23.625,23.625,0,0,0,33.376,0,33.77,33.77,0,0,1,47.7,0,23.616,23.616,0,0,0,33.369,0,33.787,33.787,0,0,1,47.713,0,23.409,23.409,0,0,0,16.682,6.91A23.424,23.424,0,0,0,325.8,9.887a5.064,5.064,0,1,1,7.165,7.158,33.527,33.527,0,0,1-23.853,9.888A33.553,33.553,0,0,1,285.259,17.045Z"
									transform="translate(0.5 0.5)"
									stroke="rgba(0,0,0,0)"
									strokeMiterlimit="10"
									strokeWidth="1"
								/>
							</svg>
						</div>
						<p className="font-bold tracking-wide text-gray-800">
							Vodoinstalaterske usluge
						</p>
					</Link>

					<Link href="#" className="inline-block p-8 text-center">
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 hover:invert">
							<svg
								className="w-10 h-10 text-deep-purple-accent-400"
								stroke="currentColor"
								viewBox="0 0 52 52"
							>
								<polygon
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
									fill="none"
									points="29 13 14 29 25 29 23 39 38 23 27 23"
								/>
							</svg>
						</div>
						<p className="font-bold tracking-wide text-gray-800">
							Električarski radovi
						</p>
					</Link>
					<Link href="#" className="inline-block p-8 text-center">
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 hover:invert">
							<Image className="w-8" src={columnImage} alt="column icon" />
						</div>
						<p className="font-bold tracking-wide text-gray-800">
							Gipsarski radovi
						</p>
					</Link>

					<Link href="#" className="inline-block p-8 text-center">
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 hover:invert">
							<Image className="w-8" src={brushImage} alt="brush icon" />
						</div>
						<p className="font-bold tracking-wide text-gray-800">
							Molerski radovi
						</p>
					</Link>
					<Link href="#" className="inline-block p-8 text-center">
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 hover:invert">
							<Image className="w-8" src={tilesImage} alt="tiles icon" />
						</div>
						<p className="font-bold tracking-wide text-gray-800">
							Renoviranje i adaptacija kupatila
						</p>
					</Link>
					<Link href="#" className="inline-block p-8 text-center">
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 hover:invert">
							<Image className="w-8" src={kitchenImage} alt="kitchen icon" />
						</div>
						<p className="font-bold tracking-wide text-gray-800">
							Renoviranje kuhinje
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
