import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceGallery({
	imageOne,
	imageTwo,
	imageThree,
	imageFour,
}) {
	return (
		<section className="grid grid-cols-2 max-w-4xl mx-auto px-4">
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={imageOne}
					alt="placeholder image "
				/>
			</motion.div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={imageTwo}
					alt="placeholder image"
				/>
			</motion.div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={imageThree}
					alt="placeholder image"
				/>
			</motion.div>

			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={imageFour}
					alt="placeholder image"
				/>
			</motion.div>
		</section>
	);
}
