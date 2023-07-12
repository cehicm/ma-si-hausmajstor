import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import bathroomImg from "../../../public/images/bathroomvertical.jpg";
import dropCieling from "../../../public/images/drop-cieling.jpg";
import spaceHorizontal from "../../../public/images/space-horizontal.jpg";

export default function ServiceGallery() {
	return (
		<section className="grid grid-cols-2 max-w-4xl mx-auto px-4">
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
					src={dropCieling}
					alt="drop cieling image"
				/>
			</motion.div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover p-4"
					src={spaceHorizontal}
					alt="space horizontal image"
				/>
			</motion.div>
		</section>
	);
}
