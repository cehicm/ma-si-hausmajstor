import Link from "next/link";
import Image from "next/image";
import heroImg from "../../public/images/usluge-hero.jpg";

export default function usluge() {
	return (
		<div className="relative">
			<Image
				src={heroImg}
				className="absolute inset-0 object-cover w-full h-full"
				alt=""
			/>
			<div className="relative bg-opacity-75 bg-deep-purple-accent-700">
				<svg
					className="absolute inset-x-0 bottom-0 text-white"
					viewBox="0 0 1160 163"
				>
					<path
						fill="currentColor"
						d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
					/>
				</svg>
				<div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="flex flex-col items-center justify-between xl:flex-row">
						<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
								The quick, brown fox <br className="hidden md:block" />
								jumps over a lazy dog
							</h2>
							<p className="max-w-xl mb-6 text-base text-gray-200 md:text-lg">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudan, totam rem aperiam, eaque ipsa
								quae.
							</p>
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
				</div>
			</div>
		</div>
	);
}
