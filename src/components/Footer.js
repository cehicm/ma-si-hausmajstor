import Link from "next/link";
import Image from "next/image";

import { TiSocialFacebookCircular } from "react-icons/ti";
import {
	SlSocialInstagram,
	SlSocialGoogle,
	SlCallIn,
	SlSocialFacebook,
} from "react-icons/sl";
export default function Footer() {
	return (
		<footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
			<div className="mx-6 py-10 text-center md:text-left">
				<div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
							MA-SI Hausmajstor Beograd
						</h6>
						<p>Brza i pouzdana, po pristupačnim cenama.</p>
					</div>
					<div>
						<Link
							href="/usluge"
							className="md:pl-2 mb-4 flex justify-center font-semibold uppercase md:justify-start"
						>
							Usluge
						</Link>

						<ul className="flex flex-col">
							<Link
								className="text-neutral-600 dark:text-neutral-200 p-2 hover:bg-dirtygray"
								href="/usluge/vodoinstalaterske-usluge"
							>
								Vodoinstalaterske usluge
							</Link>
							<Link
								className="text-neutral-600 dark:text-neutral-200 hover:bg-dirtygray hover:text-white p-2"
								href="/usluge/elektricarski-radovi"
							>
								Električkarski radovi
							</Link>
							<Link
								className="text-neutral-600 dark:text-neutral-200 hover:bg-dirtygray hover:text-white p-2"
								href="/usluge/hitne-intervencije"
							>
								Hitne intervencije
							</Link>
						</ul>
					</div>
					<div>
						<h6 className="md:pl-2 mb-4 flex justify-center font-semibold uppercase md:justify-start">
							Korisni linkovi
						</h6>

						<ul className="flex flex-col">
							<Link
								className="text-neutral-600 dark:text-neutral-200 hover:bg-dirtygray hover:text-white p-2"
								href="/o-nama"
							>
								O nama
							</Link>
							<Link
								href="/galerija"
								className="text-neutral-600 dark:text-neutral-200 hover:bg-dirtygray hover:text-white p-2"
							>
								Galerija
							</Link>
							<Link
								href="/cenovnik"
								className="text-neutral-600 dark:text-neutral-200 hover:bg-dirtygray hover:text-white p-2"
							>
								Cenovnik
							</Link>
						</ul>
					</div>
					<div>
						<h6 className="md:pl-2 mb-4 flex justify-center font-semibold uppercase md:justify-start">
							Kontakt
						</h6>

						<Link
							href="mailto:markosindjelic84@gmail.com"
							className="mb-4 flex items-center justify-center md:justify-start"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="mr-3 h-5 w-5"
							>
								<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
								<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
							</svg>
							markosindjelic84@gmail.com
						</Link>
						<Link
							href="tel:+381607225558"
							className="mb-4 flex items-center justify-center md:justify-start"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="mr-3 h-5 w-5"
							>
								<path
									fillRule="evenodd"
									d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
									clipRule="evenodd"
								/>
							</svg>
							060 722 5558
						</Link>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between border-white border-t">
				<div className="mr-12 hidden lg:block">
					<span>Zapratite nas na društvenim mrežama</span>
				</div>
				<div className="flex justify-center">
					<Link
						href="#"
						className="mr-6 text-neutral-600 dark:text-neutral-200"
					>
						<SlSocialInstagram className="h-6 w-6" />
					</Link>
					<Link
						href="#!"
						className="mr-6 text-neutral-600 dark:text-neutral-200"
					>
						<SlSocialFacebook className="h-6 w-6" />
					</Link>
					<Link
						href="mailto:markosindjelic84@gmail.com"
						className="mr-6 text-neutral-600 dark:text-neutral-200"
					>
						<SlSocialGoogle className="h-6 w-6" />
					</Link>
					<Link
						href="tel:+381607225558"
						className="mr-6 text-neutral-600 dark:text-neutral-200"
					>
						<SlCallIn className="h-6 w-6" />
					</Link>
				</div>
			</div>

			<div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
				<span className="mr-4">© 2023 Copyright:</span>
				<span className="font-semibold text-neutral-600 dark:text-neutral-400">
					MA-SI hausmajstor
				</span>
			</div>
		</footer>
	);
}
