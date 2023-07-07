export default function ServicePageShortDesc({ pointTitle, pointBody }) {
	return (
		<li className="">
			<span className="font-bold">{pointTitle}: </span> {pointBody}
		</li>
	);
}
