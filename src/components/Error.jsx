/* eslint-disable react/no-unescaped-entities */
const ErrorPage = () => {
	const handleRetry = () => {
		window.location.reload();
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white shadow-md rounded-md p-8 max-w-lg w-full">
				<h2 className="text-3xl font-semibold mb-4 text-center text-red-500">
					Oops! Something went wrong
				</h2>
				<p className="text-lg text-gray-700 mb-6 text-center">
					We're sorry, but there was an error processing your request. Please
					try again later.
				</p>
				<div className="flex justify-center">
					<button
						onClick={handleRetry}
						className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-400"
					>
						Retry
					</button>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
