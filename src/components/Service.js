import Link from "next/link";
import Image from "next/image";

import ButtonBrown from "./buttons/ButtonBrown";

export default function Service({ title, text, url, icon }) {
	return (
		<div className="flex flex-col items-start py-12 pb-16 border border-b-lightbrown border-2 border-opacity-60 max-w-4xl px-8 gap-8">
			<Link href={url} className="relative">
				<Image
					src={icon}
					className="w-full h-full absolute opacity-10"
					alt={title}
				/>

				<div>
					<div className="flex items-center gap-3">
						<h3 className="text-3xl">{title}</h3>
					</div>
					<p className="pt-6">{text}</p>
				</div>
			</Link>
			<ButtonBrown className="self-start" text="O usluzi" url={url} />
		</div>
	);
}
