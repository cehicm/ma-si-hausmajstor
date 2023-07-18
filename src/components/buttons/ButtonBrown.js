import React from "react";
import Link from "next/link";

export default function ButtonBrown({ text, url }) {
	return (
		<Link
			href={url}
			aria-label={text}
			className="inline-flex items-center justify-center h-16 text-center px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-lightbrown hover:bg-white hover:text-lightbrown focus:shadow-outline focus:outline-none md:min-w-[200px] text-sm w-1/2 md:w-auto"
		>
			{text}
		</Link>
	);
}
