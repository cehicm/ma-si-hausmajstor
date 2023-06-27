import { useState, useEffect } from "react";
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
			className={` flex justify-between sticky top-0 bg-lightprimary z-20 w-full px-6 lg:px-10 py-8 lg:py-4 opacity-100 ${
				isNavOpen ? "h-screen flex-col" : "justify-between items-center"
			} ${isClicked ? "animate-peekaboo" : ""} md:h-auto md:flex-row`}
		>
			<Link href="/" className={`md:hidden ${isNavOpen ? "hidden" : ""}`}>
				<Image
					src={logoImage}
					className="cover h-24 w-24"
					alt="MA-Si Beograd hausmajstor logo"
				/>
			</Link>
			<div className="w-[80%] mx-auto flex flex-row-reverse md:flex-row gap-4 sm:items-center">
				<TfiClose
					className={`hover:cursor-pointer h-6 w-6 ${
						isNavOpen ? "block self-start" : "hidden"
					} md:hidden`}
					onClick={() => {
						setIsNavOpen((prev) => !prev);
						setClickedClass((prev) => !prev);
					}}
				/>
				<BiMenuAltRight
					className={`hover:cursor-pointer h-9 w-9 md:hidden ${
						isNavOpen ? "hidden" : "block"
					}`}
					onClick={() => {
						setIsNavOpen((prev) => !prev);
						setClickedClass((prev) => !prev);
					}}
				/>

				<Link href="/" className="hidden md:block lg:mr-5">
					<Image src={logoImage} height={40} alt="ozon logo image" />
				</Link>

				<div
					className={`flex flex-col-reverse md:flex-row gap-6 w-full justify-between md:items-center lg:justify-end ${
						isNavOpen ? "items-start" : "items-end"
					} md:items-start`}
				>
					<nav
						className={`flex flex-col w-full ${
							isNavOpen ? "block" : "hidden"
						} md:flex md:flex-row md:justify-center lg:justify-start`}
					>
						<ul
							className={`flex flex-col w-full md:w-fit md:m-0 text-left justify-center items-start mx-auto gap-2 md:gap-8 xl:gap-16 ${
								isNavOpen ? "block" : "hidden"
							} md:flex md:flex-row`}
						>
							<Link
								className={`md:hidden md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize`}
								href="/"
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								Početna
							</Link>
							<div className="w-full">
								<Link
									className="hover:text-lightbrown  relative md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize md:lowercase inline"
									href="/usluge"
									onMouseEnter={() => setHover((prev) => !prev)}
									onMouseLeave={() => setHover((prev) => !prev)}
									onClick={() => setIsNavOpen((prev) => !prev)}
								>
									Usluge
								</Link>
								<BiChevronDown
									className={`inline w-6 h-6 hover:cursor-pointer ${
										isSubMenuOpen ? "rotate-180 pl" : "rotate-"
									}`}
									onClick={() => setIsSubMenuOpen((prev) => !prev)}
								/>

								<ul
									onMouseEnter={() => setHover((prev) => !prev)}
									onMouseLeave={() => setHover((prev) => !prev)}
									className={`ml-4 md:ml-0 my-1 md:my-0 drop-shadow-2xl md:absolute text-sm flex flex-col gap-2 w-full md:w-[200px] lg:top-12  ${
										isItemHovered ? "md:flex md:bg-white" : "md:hidden"
									} ${isSubMenuOpen ? "block" : "hidden"}`}
								>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray"
										href="#"
										onClick={() => setIsNavOpen((prev) => !prev)}
									>
										Vodoinstalaterske usluge
									</Link>

									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="#"
										onClick={() => setIsNavOpen((prev) => !prev)}
									>
										Električki radovi
									</Link>

									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="#"
										onClick={() => setIsNavOpen((prev) => !prev)}
									>
										Gipsarski radovi
									</Link>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="#"
										onClick={() => setIsNavOpen((prev) => !prev)}
									>
										Molerski radovi
									</Link>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="#"
										onClick={() => setIsNavOpen((prev) => !prev)}
									>
										Renoviranje i adaptacija kupatila
									</Link>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="#"
										onClick={() => setIsNavOpen((prev) => !prev)}
									>
										Renoviranje kuhinje
									</Link>
									<Link
										className="p-2 md:border-white border-double md:border-b-2 hover:bg-dirtygray hover:text-white"
										href="#"
										onClick={() => setIsNavOpen((prev) => !prev)}
									>
										Posebne usluge
									</Link>
								</ul>
							</div>

							<Link
								className="hover:text-lightbrown  md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize md:lowercase text-red-500"
								href="#"
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								Hitne intervencije
							</Link>

							<Link
								className="hover:text-lightbrown md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize md:lowercase"
								href="#"
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								O nama
							</Link>

							<Link
								className="hover:text-lightbrown  md:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize md:lowercase"
								href="/galerija"
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								Galerija
							</Link>

							<Link
								href="/kontakt"
								className="hover:text-lightbrown  md:bg-transparent lg:bg-transparent w-full py-2 pl-2 md:p-0 rounded-md capitalize md:lowercase"
								onClick={() => setIsNavOpen((prev) => !prev)}
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
