import Link from "next/link";
import Image from "next/image";

export default function Service({ title, text, url, icon }) {
	return (
		<Link href={url}>
			<div className="max-w-4xl px-8 py-8">
				<div className="flex items-center gap-3">
					<h3 className="text-3xl">{title}</h3>
					<Image src={icon} className="w-12 h-7" />
				</div>
				<p className="pt-6">{text}</p>
			</div>
		</Link>
	);
}
