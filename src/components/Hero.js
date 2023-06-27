import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/images/logo.png";

export default function Hero() {
	return (
		<section>
			<div className="relative flex flex-col-reverse py-16 px-6 lg:pt-0 lg:flex-col lg:pb-0">
				<div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
					<svg
						className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
						viewBox="0 0 100 100"
						fill="currentColor"
						preserveAspectRatio="none slice"
					>
						<path d="M50 0H100L50 100H0L50 0Z" />
					</svg>
					<Image
						className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
						src={logoImage}
						alt="Logo Marko Simic hausmajstor usluge Beograd"
					/>
				</div>
				<div className="relative flex flex-col items-start w-full max-w-xl mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
					<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
						<p className="inline-block py-3 px-4 mb-3 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
							Vaša zamisao je naša misija
						</p>
						<h1 className="mb-5 font-sans font-bold tracking-tight text-gray-900 text-4xl sm:leading-none">
							{" "}
							MA-SI hausmajstor{" "}
						</h1>
						<p className="pr-5 mb-8 text-base text-gray-700 md:text-lg">
							Sa dugogodišnjim iskustvom i strastvenim pristupom, posvećeni smo
							pružanju izvanrednih rezultata. Bez obzira da li vam je potrebna
							hitna popravka, renoviranje prostora ili jednostavno želite
							osvežiti izgled vašeg doma, mi smo tu da vam pomognemo.
						</p>
						<div className="flex items-center">
							<Link
								href="/"
								className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-lightbrown hover:bg-white hover:text-lightbrown focus:shadow-outline focus:outline-none"
							>
								Ideje za preuređenje
							</Link>
							<Link
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold text-lightbrown transition-colors duration-200 hover:bg-lightbrown hover:text-white border border-lightbrown h-12 py-2 px-12 rounded"
							>
								Kontakt
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
