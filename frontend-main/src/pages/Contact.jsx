

const Contact = () => {
    // #make a api for me that will get a post request and send the data to backend
    

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-gray-950 bg-opacity-40 p-8 rounded-lg shadow-md w-96 text-white">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="text-white">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" className="bg-transparent w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="bg-transparent w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="bg-transparent w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  