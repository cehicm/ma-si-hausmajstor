import Image from "next/image";
import Link from "next/link";

export default function ServiceBox({ title, image, link }) {
	return (
		<section>
			<Link className="relative h-full" href={link}>
				<div className={`absolute bg-sky-300 top-1/2 w-full text-center p-5`}>
					<h3>{title}</h3>
				</div>

				<Image
					src={image}
					className="h-full object-cover w-full"
					alt="placeholder"
				/>
			</Link>
		</section>
	);
}
