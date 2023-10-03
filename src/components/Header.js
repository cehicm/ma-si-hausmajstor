import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/images/logo.png";
import { TfiClose } from "react-icons/tfi";
import { BiMenuAltRight, BiChevronDown } from "react-icons/bi";

function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const [isItemHovered, setHover] = useState(false);
	const [isClicked, setClickedClass] = useState(false);

	return (
		<header
			className={`flex justify-between sticky top-0 bg-lightprimary z-20 w-full px-6 lg:px-10 py-2 lg:py-4 opacity-100 ${
				isNavOpen ? "h-screen flex-col pt-6" : "justify-between items-center"
			} ${
				isClicked ? "animate-peekaboo" : ""
			} lg:animate-none lg:h-auto lg:flex-row`}
		>
			<Link href="/" className={`lg:hidden ${isNavOpen ? "hidden" : ""}`}>
				<Image
					src={logoImage}
					className="cover h-20 w-20"
					alt="MA-Si Beograd hausmajstor logo"
				/>
			</Link>
			<div className="w-full max-w-7xl mx-auto flex flex-row-reverse lg:flex-row gap-4 sm:items-center">
				<TfiClose
					className={`hover:cursor-pointer h-6 w-6 ${
						isNavOpen ? "block self-start" : "hidden"
					} lg:hidden`}
					onClick={() => {
						setIsNavOpen((prev) => !prev);
						setClickedClass((prev) => !prev);
					}}
				/>
				<BiMenuAltRight
					className={`hover:cursor-pointer h-9 w-9 lg:hidden ${
						isNavOpen ? "hidden" : "block"
					}`}
					onClick={() => {
						setIsNavOpen((prev) => !prev);
						setClickedClass((prev) => !prev);
					}}
				/>

				<Link href="/" className="hidden lg:block lg:mr-5">
					<Image
						className="w-[200px] lg:h-[80px] object-cover"
						src={logoImage}
						alt="MA-Si Beograd hausmajstor logo"
					></Image>
				</Link>

				<div
					className={`flex flex-col-reverse md:flex-row gap-6 w-full justify-between md:items-center lg:justify-end ${
						isNavOpen ? "items-start" : "items-end"
					} lg:items-start`}
				>
					<nav
						className={`flex flex-col w-full ${
							isNavOpen ? "block" : "hidden"
						} lg:flex lg:flex-row lg:justify-start`}
					>
						<ul
							className={`flex flex-col w-full md:w-fit lg:w-full max-w-3xl md:m-0 text-left justify-center lg:justify-start items-start mx-auto gap-2 md:gap-8 xl:gap-16 ${
								isNavOpen ? "block" : "hidden"
							} lg:grid grid-flow-col`}
						>
							<Link
								className={`md:hidden md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize`}
								href="/"
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								Početna
							</Link>
							<div className="w-full md:w-fit lg:col-start-5">
								<Link
									className="hover:text-lightbrown relative md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize inline lg:block lg:w-fit "
									href="/usluge"
									onMouseEnter={() => setHover((prev) => !prev)}
									onMouseLeave={() => setHover((prev) => !prev)}
									onClick={() => setIsNavOpen((prev) => !prev)}
								>
									Usluge
								</Link>
								<BiChevronDown
									className={`inline md:hidden w-6 h-6 hover:cursor-pointer ml-3 ${
										isSubMenuOpen ? "rotate-180" : ""
									}`}
									onClick={() => setIsSubMenuOpen((prev) => !prev)}
								/>

								<ul
									onMouseEnter={() => setHover((prev) => !prev)}
									onMouseLeave={() => setHover((prev) => !prev)}
									className={`ml-4 md:ml-0 my-1 md:my-0 drop-shadow-2xl md:absolute text-sm flex flex-col gap-2 w-full md:w-[200px] lg:top-26  ${
										isItemHovered ? "md:flex md:bg-white" : "md:hidden"
									} ${isSubMenuOpen ? "block" : "hidden"}`}
								>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray"
										href="/usluge/vodoinstalaterske-usluge"
										onClick={() => {
											setIsNavOpen((prev) => !prev);
											setClickedClass((prev) => !prev);
										}}
									>
										Vodoinstalaterske usluge
									</Link>

									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="/usluge/elektricarski-radovi"
										onClick={() => {
											setIsNavOpen((prev) => !prev);
											setClickedClass((prev) => !prev);
										}}
									>
										Električkarski radovi
									</Link>

									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="/usluge/gipsarski-radovi"
										onClick={() => {
											setIsNavOpen((prev) => !prev);
											setClickedClass((prev) => !prev);
										}}
									>
										Gipsarski radovi
									</Link>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="/usluge/molerski-radovi"
										onClick={() => setIsNavOpen((prev) => !prev)}
									>
										Molerski radovi
									</Link>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="/usluge/adaptacija-kupatila"
										onClick={() => {
											setIsNavOpen((prev) => !prev);
											setClickedClass((prev) => !prev);
										}}
									>
										Renoviranje i adaptacija kupatila
									</Link>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="/usluge/renoviranje-kuhinje"
										onClick={() => {
											setIsNavOpen((prev) => !prev);
											setClickedClass((prev) => !prev);
										}}
									>
										Renoviranje kuhinje
									</Link>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="/usluge/posebne-usluge"
										onClick={() => {
											setIsNavOpen((prev) => !prev);
											setClickedClass((prev) => !prev);
										}}
									>
										Posebne usluge
									</Link>
								</ul>
							</div>

							<Link
								className="hover:text-lightbrown  md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize text-red-500 lg:w-fit"
								href="/usluge/hitne-intervencije"
								onClick={() => {
									setIsNavOpen((prev) => !prev);
									setClickedClass((prev) => !prev);
								}}
							>
								Hitne intervencije
							</Link>

							<Link
								className="hover:text-lightbrown md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize lg:w-fit lg:col-start-1"
								href="/o-nama"
								onClick={() => {
									setIsNavOpen((prev) => !prev);
									setClickedClass((prev) => !prev);
								}}
							>
								O nama
							</Link>

							<Link
								className="hover:text-lightbrown  md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize lg:w-fit"
								href="/galerija"
								onClick={() => {
									setIsNavOpen((prev) => !prev);
									setClickedClass((prev) => !prev);
								}}
							>
								Galerija
							</Link>

							<Link
								href="/kontakt"
								className="hover:text-lightbrown  md:bg-transparent lg:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize lg:w-fit"
								onClick={() => {
									setIsNavOpen((prev) => !prev);
									setClickedClass((prev) => !prev);
								}}
							>
								Kontakt
							</Link>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
