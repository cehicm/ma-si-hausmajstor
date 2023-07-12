import { motion } from "framer-motion";

export default function CTA() {
	return (
		<div className="bg-lightbrown my-8 lg:text-3xl py-8 text-center text-white">
			<motion.div
				whileHover={{ scale: [null, 1.5, 1.4] }}
				transition={{ duration: 0.3 }}
			>
				VAŠA ZAMISAO JE NAŠA MISIJA!
			</motion.div>
		</div>
	);
}
