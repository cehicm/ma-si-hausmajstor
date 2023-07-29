import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import ServiceGallery from "@/components/servicepage/ServiceGalleryFour";
import CTA from "@/components/CTA";

import dropCeiling from "../../../public/images/drop-cieling.jpg";
import spaceHorizontal from "../../../public/images/space-horizontal.jpg";
import gipsarskiOne from "../../../public/images/gipsarski1.jpg";
import gipsarskiTwo from "../../../public/images/gipsarski2.jpg";

export default function gipsarskiRadovi() {
	return (
		<section>
			<div className="relative flex justify-center">
				<div className="z-0 w-full">
					<Image
						src={dropCeiling}
						alt="placeholder image"
						className="w-full h-[500px] md:h-[700px] object-cover"
					/>
				</div>
				<ServicePageHero
					title="Gipsarski radovi u Beogradu"
					text="Vaš dom ili poslovni prostor zaslužuju najbolje! Neka naši stručnjaci za gipsarske radove pretvore vaše ideje u stvarnost i učine vaš prostor spektakularnim."
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
						<ServicePageShortDesc
							pointTitle="Gipsarske Popravke"
							pointBody="	Popravljamo oštećene zidove i plafone kako biste vratili vaš prostor u prvobitno stanje."
						/>
						<ServicePageShortDesc
							pointTitle="Popravke i izravnavanje zidova:"
							pointBody="Uklonite oštećenja i nepravilnosti na zidovima kako biste stvorili glatku i besprijekornu površinu za nanošenje boje.
							"
						/>

						<ServicePageShortDesc
							pointTitle="Gipsani Ukrasi"
							pointBody=": Dodajemo gipsane ukrase i detalje kako bismo uneli eleganciju i šarm u vaš prostor."
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
							pointBody="Naši gipsarski majstori imaju obimno iskustvo i veštine potrebne za obavljanje svih vrsta gipsarskih radova. Bilo da je u pitanju gipsani zid, plafon ili dekorativni element, možete se osloniti na nas da obavimo posao sa preciznošću i kvalitetom"
						/>
						<ServicePageShortDesc
							pointTitle="Kvalitetni Materijali"
							pointBody="Koristimo samo visokokvalitetne gipsarske materijale kako bismo osigurali dugotrajnost i izdržljivost vaših površina."
						/>

						<ServicePageShortDesc
							pointTitle="Raznovrsne Usluge"
							pointBody="Nudimo širok spektar gipsarskih radova, uključujući popravke oštećenih površina, gipsanih obloga, pregradnih zidova, dekorativnih ukrasa i još mnogo toga."
						/>
					</ul>
				</div>
			</div>

			<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
			<ServiceGallery
				imageOne={dropCeiling}
				imageTwo={spaceHorizontal}
				imageThree={gipsarskiOne}
				imageFour={gipsarskiTwo}
			/>
		</section>
	);
}
