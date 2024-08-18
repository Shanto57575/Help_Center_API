import logo from "../assets/abs.svg";

const Footer = () => {
	return (
		<footer className="bg-black text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					<div className="col-span-1">
						<img
							src={logo}
							className="w-20 h-20 mx-auto sm:mx-0"
							alt="Abstract Logo"
						/>
					</div>
					<div>
						<h3 className="font-semibold mb-2 text-center sm:text-left">
							Resources
						</h3>
						<ul className="space-y-1 text-center sm:text-left">
							<li>Blog</li>
							<li>Help Center</li>
							<li>Release Notes</li>
							<li>Status</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold mb-2 text-center sm:text-left">
							Community
						</h3>
						<ul className="space-y-1 text-center sm:text-left">
							<li>Twitter</li>
							<li>LinkedIn</li>
							<li>Facebook</li>
							<li>Dribbble</li>
							<li>Podcast</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold mb-2 text-center sm:text-left">
							Company
						</h3>
						<ul className="space-y-1 text-center sm:text-left">
							<li>About Us</li>
							<li>Careers</li>
							<li>Legal</li>
						</ul>
						<div className="mt-4 text-center sm:text-left">
							<h4 className="font-semibold mb-2">Contact Us</h4>
							<p>info@abstract.com</p>
						</div>
					</div>
					<div className="flex items-center justify-center sm:justify-start md:col-span-3 lg:col-span-1 mt-8 sm:mt-0">
						<p className="text-center sm:text-left">
							&copy; Copyright {new Date().getFullYear()} Abstract Studio
							Design, Inc. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
