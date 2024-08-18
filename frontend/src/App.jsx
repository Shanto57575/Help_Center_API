import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchCategories();
	}, []);

	const fetchCategories = async () => {
		try {
			const response = await axios.get(
				"https://backend-wqc5in6xn-shanto57575s-projects.vercel.app/api/cards"
			);
			if (response.data) {
				setCategories(response.data);
			}
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	};

	const filteredCategories = categories?.filter((category) =>
		category.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen font-sans bg-gray-200">
			<Navbar />
			<main className="flex-grow">
				<div className="">
					<div className="p-4 md:p-16">
						<h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center mb-4 sm:mb-8">
							How can we help?
						</h1>
						<div className="mb-4 relative sm:mb-8 max-w-full sm:max-w-lg mx-auto px-2 sm:px-0">
							<input
								type="text"
								placeholder="Search"
								className="w-full px-3 py-2 text-sm sm:text-base rounded-sm border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<div className="absolute top-2 right-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
									/>
								</svg>
							</div>
						</div>
					</div>{" "}
					{!categories ? (
						<div className="flex justify-center items-center h-64">
							<div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-blue-500"></div>
						</div>
					) : (
						<div className="bg-white md:px-20 lg:px-40 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8 md:p-16">
							{filteredCategories.map((category) => (
								<div
									key={category._id}
									className="bg-gray-100 w-full sm:w-auto mx-auto overflow-hidden shadow rounded-lg border border-gray-200"
								>
									<div className="w-full md:w-96 h-40 mx-auto">
										<h3 className="text-base font-bold sm:text-lg text-gray-600 px-5 py-3 border-b">
											{category.title}
										</h3>
										<p className="mt-1 font-medium text-base text-gray-500 px-5 pb-3">
											{category.description}
										</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default App;
