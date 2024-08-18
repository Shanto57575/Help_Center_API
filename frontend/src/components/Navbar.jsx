import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/abs.svg";
import toast, { Toaster } from "react-hot-toast";

const Navbar = ({ onAddCategory }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"https://backend-black-zeta.vercel.app/api/cards",
				{
					title,
					description,
				}
			);
			if (response.data) {
				toast.success("Request Submitted Successfully!");
				onAddCategory(response.data);
			}
		} catch (error) {
			console.error(error.response.data.error);
			toast.error(error.response.data.error);
		}

		setIsModalOpen(false);
		setTitle("");
		setDescription("");
	};

	return (
		<nav className="bg-black text-white">
			<Toaster />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<img src={logo} alt="Logo" className="h-20 w-20 md:h-32 md:w-32" />
						<span className="ml-2 text-md md:text-lg sm:text-xl font-semibold">
							| Help Center
						</span>
					</div>
					<div className="hidden md:flex items-center space-x-2 sm:space-x-4">
						<button
							onClick={() => setIsModalOpen(true)}
							className="font-semibold border border-white hover:bg-white hover:text-black px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition duration-300 text-sm sm:text-base"
						>
							Submit a request
						</button>
					</div>
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						>
							{isMenuOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<button
							className="font-semibold border border-white hover:bg-white hover:text-black px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition duration-300 text-sm sm:text-base"
							onClick={() => {
								setIsModalOpen(true);
								setIsMenuOpen(false);
							}}
						>
							Submit a request
						</button>
					</div>
				</div>
			)}

			{isModalOpen && (
				<div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
					<div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
					<div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-xs sm:max-w-lg w-full mx-4 sm:mx-auto relative">
						<div className="flex justify-between items-center p-4 border-b font-serif">
							<h3 className="text-lg font-medium text-gray-900 italic">
								Submit a request
							</h3>
							<button
								onClick={() => setIsModalOpen(false)}
								className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="p-4 font-serif">
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label
										htmlFor="title"
										className="block text-sm font-medium text-gray-700"
									>
										Title
									</label>
									<input
										type="text"
										id="title"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
										required
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="description"
										className="block text-sm font-medium text-gray-700"
									>
										Description
									</label>
									<textarea
										id="description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										rows="3"
										className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
										required
									></textarea>
								</div>
								<div className="flex justify-end space-x-3">
									<button
										type="button"
										onClick={() => setIsModalOpen(false)}
										className="inline-flex justify-center rounded-md border bg-red-500 hover:bg-red-600 text-white border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
