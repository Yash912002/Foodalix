export default function Shimmer() {
  return (
    <div className="flex justify-center gap-4 mx-auto max-w-screen-lg flex-wrap">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="w-[300px] bg-gray-200 rounded-md overflow-hidden relative h-[300px] shadow-md"
          style={{ margin: '0.5rem' }}
        >
          <div className="absolute top-0 left-0 w-full h-full animate-pulse">
            <div className="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md transform animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
