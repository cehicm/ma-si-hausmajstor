import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import ServiceGallery from "@/components/servicepage/ServiceGalleryTwo";
import CTA from "@/components/CTA";

import kitchenOne from "../../../public/images/kitchen1.jpg";
import kitchenTwo from "../../../public/images/kitchen2.jpg";

export default function adaptacijaKupatila() {
	return (
		<section>
			<div className="relative flex justify-center">
				<div className="z-0 w-full">
					<Image
						src={kitchenOne}
						alt="placeholder image"
						className="w-full h-[500px] md:h-[700px] object-cover"
					/>
				</div>
				<ServicePageHero
					title="Renoviranje i adaptacija kuhinje"
					text="Vaša kuhinja je srce vašeg doma, mjesto gde se Vaša porodica i prijatelji okupljaju. MA-SI tim za renoviranje kuhinje će stvoriti prostor koji će Vam pružiti užitak u pripremi hrane i druženju."
				/>
			</div>

			<div className="py-6">
				<div className="max-w-3xl mx-auto px-10">
					<p>
						MA-SI tim stručnjaka za renoviranje kuhinje je ovdje da transformira
						vašu kuhinju u funkcionalan, estetski privlačan i inspirativan
						prostor. Bez obzira na to da li želite samo osvježiti izgled kuhinje
						ili potpuno promijeniti raspored i stil, mi vam nudimo vrhunsku
						uslugu kako bismo ostvarili vaše želje i potrebe.
					</p>

					<p className="pt-4">Naša usluga uključuje:</p>

					<ul className="list-disc pl-6 pt-4">
						<ServicePageShortDesc
							pointTitle="Zamena kuhinjskih površina"
							pointBody="Postavićemo Vam nove radne površine, pločice i backsplash koji će unijeti svežinu i lepotu u Vašu kuhinju."
						/>
						<ServicePageShortDesc
							pointTitle="Instalacija kuhinjskih elemenata"
							pointBody="Prilagodićemo Vam sve viseće kuhinje elemente kako bi, pored svežeg izgleda, obezbedili optimalno skladištenje i organizaciju u kuhinji."
						/>

						<ServicePageShortDesc
							pointTitle="Ugradnju novih aparata"
							pointBody="Ne znate kako da namestite i prikačite kuhinjske aparate? Ne brinite! Instaliraćemo Vam nove kuhinjske aparate kako biste maksimalno uživali u svim kulinarskim zadovoljstvima."
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
							pointBody="MA-SI tim za renoviranje kuhinje ima bogato iskustvo u obnovi različitih kuhinjskih prostora. Znanje i veštine koje posedujemo osiguravaju visokokvalitetno izvođenje svakog projekta."
						/>
						<ServicePageShortDesc
							pointTitle="Kreativnost i Prilagodljivost"
							pointBody="Razumemo da svaka kuhinja ima svoje jedinstvene zahteve i izazove. Naši stručnjaci su fleksibilni i prilagodljivi kako bismo Vašoj kuhinji pružili izgled i istrajnost koju zaslužujete."
						/>

						<ServicePageShortDesc
							pointTitle="Kvalitetni Materijali"
							pointBody="Koristimo samo najkvalitetnije materijale kako bismo osigurali trajnost i funkcionalnost vaše nove kuhinje."
						/>
					</ul>
				</div>
			</div>

			<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
			<ServiceGallery imageOne={kitchenOne} imageTwo={kitchenTwo} />
		</section>
	);
}
