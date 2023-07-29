import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import ServiceGallery from "@/components/servicepage/ServiceGalleryFour";
import CTA from "@/components/CTA";

import heroImg from "../../../public/images/vodoinstalaterske-hero.jpg";
import bahtroomVertical from "../../../public/images/bathroomvertical.jpg";
import bahtroomHorizontal from "../../../public/images/bathroomhorizontal.jpg";
import bathroomFullVertical from "../../../public/images/batroom-full-vertical.jpg";

export default function adaptacijaKupatila() {
	return (
		<section>
			<div className="relative flex justify-center">
				<div className="z-0 w-full">
					<Image
						src={bahtroomHorizontal}
						alt="placeholder image"
						className="w-full h-[500px] md:h-[700px] object-cover"
					/>
				</div>
				<ServicePageHero
					title="Renoviranje i adaptacija kupatila"
					text="MA-SI Hausmajstor Vam nudi renoviranje i adaptaciju kupatila, sa stručnim i iskusnim majstorima. Uz našu pomoć, možete da prilagodite svoj prostor sopstvenim potrebama i udahnete mu novi život."
				/>
			</div>

			<div className="py-6">
				<div className="max-w-3xl mx-auto px-10">
					<p>
						Naš tim stručnjaka za renoviranje i adaptaciju kupatila je tu da
						pretvori vašu ideju o savršenom kupatilu u realnost! Bez obzira na
						to da li želite da modernizujete postojeće kupatilo ili potpuno
						preuredite prostor, mi Vam nudimo visokokvalitetne usluge koje će
						vašem kupatilu doneeti nov sjaj i funkcionalnost.
					</p>

					<p className="pt-4">Naša usluga uključuje:</p>

					<ul className="list-disc pl-6 pt-4">
						<ServicePageShortDesc
							pointTitle="Gipsarske Popravke"
							pointBody="Demontažu i Uklanjanje Starog Materijala: Bez obzira na stanje vašeg trenutnog kupatila, mi ćemo ukloniti stari materijal i pripremiti prostor za obnovu."
						/>
						<ServicePageShortDesc
							pointTitle="Postavljanje keramike"
							pointBody="Postavljamo nove pločice i kako bismo vašem kupatilu dali svež izgled. Bez obzira da li Vam je cilj lepši izgled ili lakše čišćenje, pomoći ćemo Vam da doneset odluke koje su najbolje za Vaš prostor."
						/>

						<ServicePageShortDesc
							pointTitle="Sanitarije i Slavine:"
							pointBody="Instaliramo nove sanitarije, tuš kabine, kade i slavine kako bismo osigurali funkcionalnost i estetiku Vašeg kupatila."
						/>

						<ServicePageShortDesc
							pointTitle="Osvetljenje i Ventilacija :"
							pointBody="Pobrinućemo se za adekvatno osvjetljenje i ventilaciju, kako bi Vaše bilo podjednako funkcionalno i estetički zadovoljavajuće."
						/>
					</ul>

					<p className="block font-semibold mt-5">
						MA-SI hausmajstor Beograd je tu za Vas!
					</p>
				</div>

				<div className="bg-lightbrown text-white my-7">
					<h3 className="p-4 text-2xl lg:text-3xl px-10 py-8 text-center lg:max-w-3xl mx-auto">
						Pozovite nas i zakažite na{" "}
						<span className="block lg:inline">
							<Link className="underline" href="tel:+381607225558">
								060/722-5558
							</Link>
						</span>
					</h3>
				</div>

				<div className="max-w-3xl mx-auto px-10">
					<h2 className="text-xl pt-2 pb-5">Zašto izabrati nas?</h2>
					<ul className="flex flex-col gap-5 pl-6 list-disc">
						<ServicePageShortDesc
							pointTitle="Stručnost i Iskustvo"
							pointBody="Naša ekipa za renoviranje i adaptaciju kupatila ima bogato iskustvo i znanje potrebno za uspešno izvođenje različitih projekata, i postaraće se da dobijete rezultate koje želite."
						/>
						<ServicePageShortDesc
							pointTitle="Kreativnost i Prilagodljivost"
							pointBody="Razumemo da svako kupatilo ima svoje jedinstvene potrebe i estetske preference. Mi ćemo se postarati da Vaše kupatilo odgovara Vašem ukusu i životnom stilu."
						/>

						<ServicePageShortDesc
							pointTitle="Kvalitetni Materijali"
							pointBody="Koristimo samo najkvalitetnije materijale i opremu kako bismo osigurali trajnost i funkcionalnost vašeg novog kupatila."
						/>
					</ul>
				</div>
			</div>

			<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
			<ServiceGallery
				imageOne={bahtroomHorizontal}
				imageTwo={heroImg}
				imageThree={bahtroomVertical}
				imageFour={bathroomFullVertical}
			/>
		</section>
	);
}
