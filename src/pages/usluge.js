import Link from "next/link";
import Image from "next/image";

import heroImg from "../../public/images/usluge-hero.jpg";
import waterIcon from "../../public/images/icons/water-icon.svg";
import thunderIcon from "../../public/images/icons/thunder.svg";
import columnImage from "../../public/images/icons/column.svg";
import brushImage from "../../public/images/icons/brush.svg";
import kitchenImage from "../../public/images/icons/kitchen-icon.svg";
import tilesImage from "../../public/images/icons/tiles.png";

import Service from "@/components/Service";
import CTA from "@/components/CTA";
import ButtonBrown from "@/components/buttons/ButtonBrown";

export default function usluge() {
	return (
		<>
			<div className="relative bg-black">
				<Image
					src={heroImg}
					className="absolute inset-0 object-cover w-full h-full"
					alt=""
				/>
				<div className="relative bg-opacity-50 bg-lightbrown">
					<svg
						className="absolute inset-x-0 -bottom-1 text-slate-50"
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

			<div className="grid grid-cols-1 lg:grid-cols-2 mt-12">
				<Service
					title="Vodoinstalaterske usluge"
					text="MA-SI Hausmajstor Vam garantuje kvalitetne i brze vodoinstalaterske usluge na teritoriji Beograda. Takođe nudimo hitne intervencije i u mogućnosti smo da izađemo na teren i pomognemo Vam u rešavanju bilo kog problema."
					url="/usluge/vodoinstalaterske-usluge"
					icon={waterIcon}
				/>

				<Service
					title="Električarske usluge"
					text="Ukoliko su Vam potrebni električarski radovi u Beogradu, imate problema sa instalacijama, ili Vam je potrebna bilo kakva mala ili velika popravka &#8212; MA-SI Hausmajstor je mesto za vas. Kroz naše dugogodišnje iskustvo, stručnost i tim iskusnih električara, možemo da garantujemo da ćete biti zadovoljni našim uslugama."
					url="/usluge/elektricarske-usluge"
					icon={thunderIcon}
				/>

				<Service
					title="Gipsarske usluge"
					text="Realizovaćemo gipsarske radove na profesional i brz način, u skladu sa svetskim standardima suve gradnje. Mi pristupamo svakom poslu bez odlaganja, i bez kompromisa po kvalitet."
					url="/usluge/gipsarske-usluge"
					icon={columnImage}
				/>

				<Service
					title="Molerski radovi"
					text="Molerski radovi u Beogradu su naša specijalnost i u sklopu usluga nudimo: farbanje, gletovanje, i krečenje svih površina. Takođe ćemo sanitarati sve pukotine i oštećenja i osigurati se da Vaš prostor izgleda sveže i uredno."
					url="/usluge/molerski-radovi"
					icon={brushImage}
				/>

				<div className="lg:col-span-2 w-full mx-auto lg:flex lg:justify-center bg-red-100 mt-8 lg:mb-10">
					<div className="flex flex-col items-start py-12 max-w-4xl px-8 gap-8">
						<Link href="/usluge/hitne-intervencije" className="relative">
							<div>
								<div className="flex items-center gap-3">
									<h3 className="text-3xl">Hitne intervencije</h3>
								</div>
								<p className="pt-6">
									Brza reakcija i profesionalna usluga. U bilo koje doba dana i
									noći, mi ćemo izađi na teren {"("}bilo gde na teritoriji
									Beograda {")"}i pomoći Vam. Pozovite nas na 060 722 5558 .
								</p>
							</div>
						</Link>
					</div>
				</div>

				<div className="lg:col-span-2">
					<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
				</div>

				<Service
					title="Renoviranje i adaptacija kupatila"
					text="MA-SI Hausmajstor Vam nudi renoviranje i adaptaciju kupatila, sa stručnim i iskusnim majstorima. Uz našu pomoć, možete da prilagodite svoj prostor sopstvenim potrebama i udahnete mu novi život."
					url="/usluge/adaptacija-kupatila"
					icon={tilesImage}
				/>

				<Service
					title="Renoviranje kuhinje"
					text="Prvi korak renoviranje kuhinje u Beogradu sa MA-SI Hausmajstorom uključuje pravljenje plana rasporeda. Tokom ovog proces, odgovorićemo na sva vaša pitanja i na vaše zahteve. Ukoliko još uvek niste sigurni šta želite, tu smo da vam pomognemo!"
					icon={kitchenImage}
					url="/usluge/renoviranje-kuhinje"
				/>

				<div className="lg:col-span-2">
					<CTA text="Pozovite nas na 060 722 5558" url="tel:+381607225558" />
				</div>
			</div>

			<div className="lg:col-span-2 w-full mx-auto lg:flex lg:justify-center bg-orange-300/40 mb-10">
				<div className="flex flex-col items-start py-12 pb-16 max-w-4xl px-8 gap-8">
					<Link href="/usluge/posebne-usluge" className="relative">
						<div>
							<div className="flex items-center gap-3">
								<h3 className="text-3xl">Posebne usluge</h3>
							</div>
							<p className="pt-6">
								Niste našli ono što Vam je potrebeno? Ne brinite! MA-SI
								hausmajstor će Vam izaći u susret šta god da Vam je potrebno.
								Pozovite nas na 060 722 5558 .
							</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
