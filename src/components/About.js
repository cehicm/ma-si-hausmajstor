import Image from "next/image";
import { motion } from "framer-motion";

import ButtonBrown from "./buttons/ButtonBrown";

import bathroomImg from "../../public/images/bathroomvertical.jpg";
import dropCieling from "../../public/images/drop-cieling.jpg";
import spaceHorizontal from "../../public/images/space-horizontal.jpg";

export default function About() {
	return (
		<section className="mx-6 md:mx-12 lg:grid grid-cols-2 lg:mb-8">
			<div className="row-start-2 px-4 py-8 my-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border border-black">
				<div className="flex flex-col max-w-xl my-8 md:mx-auto sm:text-center lg:max-w-2xl gap-6">
					<h3 className="text-2xl">O nama</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab
						sit explicabo saepe quasi animi aut, eius harum tempore. Recusandae
						expedita dolores blanditiis quis laboriosam asperiores, voluptate
						fuga, animi iure aut, itaque officia! Dolores modi libero.
					</p>
					<p>
						Quaerat ut numquam perferendis veniam eius nesciunt exercitationem
						excepturi ipsam architecto quas ea maiores iusto corrupti facere
						vero saepe laudantium at dicta doloremque fuga, iure a dolore
						expedita minima. Dolorum nam vero ea corrupti maiores temporibus
						explicabo exercitationem at error?
					</p>

					<div className="w-48 self-center mt-4">
						<ButtonBrown url="tel:+381607225558" text="Pozovite" />
					</div>
				</div>
			</div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover  pb-4 md:p-4"
					src={bathroomImg}
					alt="bathroom image"
				/>
			</motion.div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover  pb-4 md:p-4"
					src={dropCieling}
					alt="drop cieling image"
				/>
			</motion.div>
			<motion.div
				whileHover={{ scale: [null, 1.2, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<Image
					className="w-full h-full object-cover  pb-4 md:p-4"
					src={spaceHorizontal}
					alt="space horizontal image"
				/>
			</motion.div>
		</section>
	);
}
