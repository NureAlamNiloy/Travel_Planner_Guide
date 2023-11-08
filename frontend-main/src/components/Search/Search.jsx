

const Search = () => {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path
              d="M21 21l-6-6m0 0l-6-6m6 6l-6-6M3 13a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
            ></path>
          </svg>
        </button>
      </span>
      <input
        type="text"
        className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;

