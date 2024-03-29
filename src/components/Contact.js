import Link from "next/link";

export default function Contact() {
	return (
		<section className="m-6 md:m-0 mx-auto">
			<div className="mb-10 lg:mb-32">
				<div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-contact-bg"></div>
				<div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] mx-6 max-w-lg md:max-w-2xl lg:max-w-4xl md:mx-auto">
					<div className="grid md:grid-cols-2 gap-10 md:gap-6 max-w-3xl mx-auto">
						<div className="flex items-start">
							<div className="rounded-md bg-primary-100 p-4 md:pt-0 text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									className="h-6 w-6 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
									/>
								</svg>
							</div>
							<Link href="tel:+381607225558" className="ml-3 lg:ml-6 grow">
								<p className="font-bold dark:text-white">
									Hitne intervencije 24/7
								</p>

								<p className="text-neutral-500 dark:text-neutral-200">
									+381607225558
								</p>
							</Link>
						</div>
						<div className="flex items-start w-full xl:w-6/12">
							<div className="rounded-md bg-primary-100 p-4 md:pt-0 text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									className="h-6 w-6 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
									/>
								</svg>
							</div>
							<Link href="tel:+381607225558" className="ml-3 lg:ml-6 grow">
								<p className="font-bold text-white">
									Hausmajstor kontakt telefon
								</p>
								<p className="text-neutral-500 dark:text-neutral-200">
									+381607225558{" "}
								</p>
							</Link>
						</div>
						<div className="w-full md:mb-0 lg:mb-12 xl:w-6/12">
							<div className="align-start flex">
								<div>
									<div className="inline-block rounded-md bg-primary-100 p-4 md:pt-0 text-primary">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											className="h-6 w-6 text-white"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
											/>
										</svg>
									</div>
								</div>
								<Link
									href="mailto:markosindjelic84@gmail.com"
									className="ml-3 lg:ml-6 grow"
								>
									<p className="font-bold dark:text-white">E-mail</p>
									<p className="text-neutral-500 dark:text-neutral-200">
										markosindjelic84@gmail.com
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
