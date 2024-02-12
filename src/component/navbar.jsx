import Link from "next/link";

const Navbar = () => {
	return (
		<div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-4">
			<div>
				<Link
					href="/"
					className="text-sm bg-black rounded-md p-1 font-semibold"
				>
					<span className="text-white mr-1 text-lg">Lama</span>
					<span className="w-12 h-8 rounded bg-white text-black">.dev</span>
				</Link>
			</div>
			<div>2</div>
		</div>
	);
};

export default Navbar;
