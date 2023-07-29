import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import ServiceGallery from "@/components/servicepage/ServiceGalleryFour";
import CTA from "@/components/CTA";

import galleryOne from "../../../public/images/molerski1.jpg";
import galleryTwo from "../../../public/images/molerski2.jpg";
import galleryThree from "../../../public/images/molerski3.jpg";
import galleryFour from "../../../public/images/molerski4.jpg";

export default function molerskiRadovi() {
	return (
		<section>
			<div className="relative flex justify-center">
				<div className="z-0 w-full">
					<Image
						src={galleryThree}
						alt="placeholder image"
						className="w-full h-[500px] md:h-[700px] object-cover"
					/>
				</div>
				<ServicePageHero
					title="Molerski radovi u Beogradu"
					text="Vaš prostor zaslužuje najbolje! Neka naši majstori za molerske radove preuzmu brigu o Vašem prostoru i stvore mesto koje će odisati svežinom i elegancijom."
				/>
			</div>

			<div className="py-6">
				<div className="max-w-3xl mx-auto px-10">
					<p>
						Molerski i farbarski radovi su važan segment uređenja prostora i
						imaju ključnu ulogu tokom izvođenja završnih radova. Zahvaljujući
						savremenim tehnologijama i bogatim izborom materijala &#8212; ne
						postoje granice vaših želja.
					</p>

					<p className="pt-4">
						MA-SI Hausmajstor izvodi raznovrsne vodoinstalaterske usluge,
						uključujući:
					</p>
					<ul className="list-disc pl-6 pt-4">
						<ServicePageShortDesc
							pointTitle="Unutrašnje Bojenje"
							pointBody="Osvežite svoj dom novim bojama i stvorite ugodnu atmosferu za svoju porodicu."
						/>
						<ServicePageShortDesc
							pointTitle="Specijalne Tehnike"
							pointBody=":Dodajte posebne teksture, uzorke, ili nijanse kako biste uneli jedinstvenost u Vaš prostor."
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
					<ul className="flex flex-col gap-5 list-disc">
						<ServicePageShortDesc
							pointTitle="Stručnost i Iskustvo"
							pointBody="Naši majstori za molerske radove imaju obilje iskustva i stručnosti u ovom području. Vešto rukujemo bojama, alatima i tehnikama kako bismo Vam pružili besprekorne rezultate."
						/>
						<ServicePageShortDesc
							pointTitle="Kvalitetni Materijali"
							pointBody="Koristimo samo najkvalitetnije boje, premaze i alate kako bismo osigurali dugotrajnost i visoku estetiku naših molerskih radova."
						/>

						<ServicePageShortDesc
							pointTitle="Fleksibilnost"
							pointBody="Mi su prilagodljivi i možemo raditi u skladu s Vašim rasporedom, kako bi Vaši molerski projekti bili obavljeni brzo i bez stresa."
						/>
					</ul>
				</div>
			</div>

			<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
			<ServiceGallery
				imageOne={galleryOne}
				imageTwo={galleryTwo}
				imageThree={galleryThree}
				imageFour={galleryFour}
			/>
		</section>
	);
}
