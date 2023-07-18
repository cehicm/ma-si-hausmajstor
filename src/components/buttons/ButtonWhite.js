import React from "react";
import Link from "next/link";

export default function ButtonWhite({ text, url }) {
	return (
		<Link
			href={url}
			aria-label={text}
			className="inline-flex items-center font-semibold h-16 text-lightbrown transition-colors duration-200 hover:bg-lightbrown hover:text-white border border-lightbrown h-12 py-2 px-12 rounded"
		>
			{text}
		</Link>
	);
}
