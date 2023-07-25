import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA({ text, url }) {
	return url ? (
		<Link href={url}>
			<motion.div
				whileHover={{ scale: [null, 1.5, 1.4] }}
				transition={{ duration: 0.3 }}
				className="bg-lightbrown my-8 lg:text-3xl py-8 text-center text-white"
			>
				<span>{text}</span>
			</motion.div>
		</Link>
	) : (
		<div className="bg-lightbrown my-8 lg:text-3xl py-8 text-center text-white">
			<motion.div
				whileHover={{ scale: [null, 1.5, 1.4] }}
				transition={{ duration: 0.3 }}
			>
				{text}
			</motion.div>
		</div>
	);
}
