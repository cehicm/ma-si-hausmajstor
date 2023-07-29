import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import ServiceGalleryTwo from "@/components/servicepage/ServiceGalleryTwo";
import CTA from "@/components/CTA";

import heroImg from "../../../public/images/elektricarske-hero.jpg";
import galleryOne from "../../../public/images/electrical-gal1.jpg";
import galleryTwo from "../../../public/images/electrical-gal2.jpg";

export default function vodoinstalaterskeUsluge() {
	return (
		<section>
			<div className="relative flex justify-center">
				<div className="z-0 w-full">
					<Image
						src={heroImg}
						alt="placeholder image"
						className="w-full h-[500px] md:h-[700px] object-cover"
					/>
				</div>
				<ServicePageHero
					title="Električarske usluge u Beogradu"
					text="Vaš dom zaslužuje samo najbolje! Neka naši stručnjaci za električarske hausmajstor usluge preuzmu brigu o vašim električnim potrebama i obezbede vam siguran i funkcionalan dom."
				/>
			</div>

			<div className="py-6">
				<div className="max-w-3xl mx-auto px-10">
					<p>
						Naš tim iskusnih i vešto obučenih hausmajstora je tu da vam pruži
						sveobuhvatne i pouzdane električarske usluge za vaš dom u Beogradu.
						Bez obzira na to da li vam je potrebna popravka, održavanje ili
						instalacija, možete se osloniti na nas da ćemo obaviti posao brzo i
						stručno.
					</p>

					<p className="pt-4">
						MA-SI Hausmajstor izvodi raznovrsne vodoinstalaterske usluge,
						uključujući:
					</p>

					<ul className="list-disc pl-6 pt-4">
						<li>
							Dijagnostiku i Popravku Kvarova: Brzo identifikujemo i rešavamo
							električarske kvarove kako biste ponovno uživali u sigurnom domu.
						</li>

						<li>
							Održavanje Električnih Instalacija: Redovno održavanje vaše
							električne mreže pomaže u sprečavanju većih problema i produžava
							njihov radni vek.
						</li>

						<li>
							Instalaciju i Zamenu Električnih Uređaja: Precizno instaliramo
							nove uređaje i zamenjujemo stare kako biste mogli u potpunosti
							iskoristiti njihove mogućnosti. e
						</li>
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
					<ul
						id="cleaning-description"
						className="flex flex-col gap-5 list-disc"
					>
						<ServicePageShortDesc
							pointTitle="Stručnost i Iskustvo"
							pointBody="Naši hausmajstori su obučeni da se nose sa svim vrstama električarskih poslova i problema. Sa godinama iskustva iza nas, rešavanje svih vaših električarskih potreba je naše zadovoljstvo."
						/>
						<ServicePageShortDesc
							pointTitle="Pouzdanost"
							pointBody="Vaša sigurnost nam je od najveće važnosti. Sva električarska radna mesta obavljamo pažljivo i pouzdano, poštujući sve relevantne standarde i propise."
						/>

						<ServicePageShortDesc
							pointTitle="Sveobuhvatne Usluge"
							pointBody="Nudimo širok spektar električarskih usluga, uključujući popravke kvarova, zamenu utičnica i prekidača, instalaciju rasvete i još mnogo toga."
						/>
					</ul>
				</div>
			</div>

			<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
			<ServiceGalleryTwo imageOne={galleryOne} imageTwo={galleryTwo} />
		</section>
	);
}
