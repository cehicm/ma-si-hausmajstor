import Image from "next/image";
import Link from "next/link";
import ServicePageHero from "@/components/servicepage/ServicePageHero";
import ServicePageShortDesc from "@/components/servicepage/ServicePageShortDesc";
import ServiceGallery from "@/components/servicepage/ServiceGalleryFour";
import heroImg from "../../../public/images/hero-img.jpg";
import CTA from "@/components/CTA";

export default function posebneUsluge() {
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
				<ServicePageHero title="Usluge po Vašoj meri" text="" />
			</div>

			<div className="py-6">
				<div className="max-w-3xl mx-auto px-10">
					<p>
						Niste našli ono što Vam je potrebeno? Ne brinite! MA-SI hausmajstor
						će Vam izaći u susret šta god da Vam je potrebno.
					</p>
				</div>

				<div className="bg-lightbrown text-white my-7">
					<h3 className="p-4 text-2xl lg:text-3xl px-10 py-8 text-center lg:max-w-3xl mx-auto">
						Pozovite nas i zakažite na{" "}
						<span>
							<Link className="underline" href="tel:+381607225558">
								060/722-5558
							</Link>
						</span>
					</h3>
				</div>
			</div>

			<CTA text="VAŠA ZAMISAO JE NAŠA MISIJA!" />
		</section>
	);
}
