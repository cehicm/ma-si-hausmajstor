import Image from "next/image";
import { motion } from "framer-motion";

import bathroomImg from "../../public/images/bathroomvertical.jpg";
import dropCieling from "../../public/images/drop-cieling.jpg";
import spaceHorizontal from "../../public/images/space-horizontal.jpg";
import spaceHorizontal2 from "../../public/images/contact-bg.jpg";
import bathroomvertical from "../../public/images/batroom-full-vertical.jpg";

export default function galerija() {
	return (
		<section className="mx-3 lg:grid grid-cols-3 lg:mb-8 p-12 gap-4">
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={bathroomImg}
					alt="bathroom image"
				/>
			</motion.div>

			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={spaceHorizontal}
					alt="bathroom image"
				/>
			</motion.div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={dropCieling}
					alt="drop cieling image"
				/>
			</motion.div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
				className="col-span-2"
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={spaceHorizontal2}
					alt="space horizontal image"
				/>
			</motion.div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={bathroomvertical}
					alt="space horizontal image"
				/>
			</motion.div>
		</section>
	);
}
