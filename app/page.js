import Image from "next/image";

export default function Home() {
  const imgSrc =
    "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-center items-center mt-24">
          <div className="text-center max-w-3xl">
            <span className="text-base font-semibold text-[#1B4242]">
              Our Blog
            </span>
            <h1 className="text-4xl lg:text-5xl text-gray-500 font-semibold mt-4">
              Stories and Interviews
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 leading-7 mt-6">
              Subscribe to learn about new product features, the latest in
              technology, solutions and updates
            </p>
            <div className="justify-center items-center mt-8 flex-col lg:flex lg:mt-10">
              <form className="justify-center items-start md:flex">
                <div className="flex-grow md:w-1/2">
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                  <p className="text-gray-500 text-start text-sm mt-2">
                    We care about your data in our
                    <a href="#" className="underline">
                      privacy policy
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-4 py-3 bg-[#1B4242] text-white font-medium rounded-lg hover:bg-[#092635] focus:outline-none mt-4 md:ml-4 lg:mt-3"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 lg:mt-24">
        <div className="text-2xl font-semibold mb-6">Recent blog post</div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Image
              alt="main-image"
              src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-56 object-cover"
              width={1000}
              height={1000}
            />
            <div className="space-y-3 mt-6">
              <span className="text-sm text-[#1B4242] font-semibold">
                Mudassar Riaz 20 Dec 2023
              </span>
              <a href="#" className="flex justify-between">
                <h3 className="text-2xl font-semibold">
                  UX review presentation
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
              <p className="text-[#1B4242]">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
            <div className="flex mt-6 space-x-2">
              <span className="px-2 py-1 text-sm text-orange-700 font-medium bg-orange-50 rounded-full">
                Research
              </span>
              <span className="px-2 py-1 text-sm text-orange-700 font-medium bg-pink-50 rounded-full">
                Presentations
              </span>
            </div>
          </div>
          <div>
            <div className="pb-6 items-center lg:flex lg:space-x-4">
              <Image
                alt="main-image"
                src="https://images.unsplash.com/photo-1590649942161-2e7eb2032934?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                className="w-full h-56 object-cover lg:w-1/2 lg:h-48"
                width={1000}
                height={1000}
              />
              <div className="mt-6 lg:mt-0">
                <div className="space-y-3">
                  <span className="text-sm text-[#1B4242] font-semibold">
                    Mudassar Riaz 20 Dec 2023
                  </span>
                  <h3 className="text-2xl font-semibold lg:text-lg">
                    Migrating to Linear 101
                  </h3>
                  <p className="text-[#1B4242]">
                    Linear helps streamline software projects, sprint, tasks,
                    and ...
                  </p>
                </div>
                <div className="flex mt-6 space-x-2">
                  <span className="px-2 py-1 text-sm text-orange-700 font-medium bg-orange-50 rounded-full">
                    Design
                  </span>
                  <span className="px-2 py-1 text-sm text-orange-700 font-medium bg-pink-50 rounded-full">
                    Research
                  </span>
                </div>
              </div>
            </div>
            <div className="pb-6 items-center lg:flex lg:space-x-4">
              <Image
                alt="main-image"
                src="https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-56 object-cover lg:w-1/2 lg:h-48"
                width={1000}
                height={1000}
              />
              <div className="mt-6 lg:mt-0">
                <div className="space-y-3">
                  <span className="text-sm text-[#1B4242] font-semibold">
                    Mudassar Riaz 20 Dec 2023
                  </span>
                  <h3 className="text-2xl font-semibold lg:text-lg">
                    Migrating to Linear 101
                  </h3>
                  <p className="text-[#1B4242]">
                    Linear helps streamline software projects, sprint, tasks,
                    and ...
                  </p>
                </div>
                <div className="flex mt-6 space-x-2">
                  <span className="px-2 py-1 text-sm text-green-700 font-medium bg-green-50 rounded-full">
                    Software developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 lg:mt-24">
        <h2 className="text-2xl font-semibold mb-6">All blogs posts</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image 
            src='https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="main-image"
            className="w-full object-cover h-56 mb-4"
            width={1000}
            height={1000}
            />
            <div className="mt-6 lg:mt-0">
              <div className="space-y-3">
              <span className="text-sm text-[#1B4242] font-semibold">
                Mudassar Riaz 20 Dec 2023
              </span>
              <a href="#" className="flex justify-between">
              <h3 className="text-2xl font-semibold">
                  Next Js routing and navigation
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
                <p className="text-gray-500">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex mt-6 space-x-2">
                <span className="px-2 py-1 text-sm text-orange-700 font-medium bg-orange-50 rounded-full">Research</span>
                <span className="px-2 py-1 text-sm text-blue-700 font-medium bg-blue-50 rounded-full">Presentation</span>
              </div>
            </div>
          </div>
          <div className="">
            <Image 
            src='https://images.unsplash.com/photo-1573164574308-edcb95e8b261?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="main-image"
            width={1000}
            height={1000}
            className="w-full h-56 object-cover mb-4"
            />
            <div className="mt-6 lg:mt-0">
              <div className="space-y-3">
              <span className="text-sm text-[#1B4242] font-semibold">
                Mudassar Riaz 20 Dec 2023
              </span>
              <a href="#" className="flex justify-between">
              <h3 className="text-2xl font-semibold">
                  Node JS authentication
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
                <p className="text-gray-500">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex mt-6 space-x-2">
                <span className="px-2 py-1 text-sm text-blue-700 font-medium bg-blue-50 rounded-full">Presentation</span>
                <span className="px-2 py-1 text-sm text-orange-700 font-medium bg-orange-50 rounded-full">Research</span>
              </div>
            </div>
          </div>
          <div className="">
            <Image 
            src='https://images.unsplash.com/photo-1573164574308-edcb95e8b261?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="main-image"
            width={1000}
            height={1000}
            className="w-full h-56 object-cover mb-4"
            />
            <div className="mt-6 lg:mt-0">
              <div className="space-y-3">
              <span className="text-sm text-[#1B4242] font-semibold">
                Mudassar Riaz 20 Dec 2023
              </span>
              <a href="#" className="flex justify-between">
              <h3 className="text-2xl font-semibold">
                  Express JS middleware`s and routing
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
                <p className="text-gray-500">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex mt-6 space-x-2">
                <span className="px-2 py-1 text-sm text-blue-700 font-medium bg-blue-50 rounded-full">Presentation</span>
                <span className="px-2 py-1 text-sm text-orange-700 font-medium bg-orange-50 rounded-full">Research</span>
              </div>
            </div>
          </div>
          <div className="">
            <Image 
            src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="main-image"
            width={1000}
            height={1000}
            className="w-full h-56 object-cover mb-4"
            />
            <div className="mt-6 lg:mt-0">
              <div className="space-y-3">
              <span className="text-sm text-[#1B4242] font-semibold">
                Mudassar Riaz 20 Dec 2023
              </span>
              <a href="#" className="flex justify-between">
              <h3 className="text-2xl font-semibold">
                  Nest JS middleware`s and routing
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
                <p className="text-gray-500">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex mt-6 space-x-2">
                <span className="px-2 py-1 text-sm text-pink-700 font-medium bg-pink-50 rounded-full">Research</span>
              </div>
            </div>
          </div>
          <div className="">
            <Image 
            src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="main-image"
            width={1000}
            height={1000}
            className="w-full h-56 object-cover mb-4"
            />
            <div className="mt-6 lg:mt-0">
              <div className="space-y-3">
              <span className="text-sm text-[#1B4242] font-semibold">
                Mudassar Riaz 20 Dec 2023
              </span>
              <a href="#" className="flex justify-between">
              <h3 className="text-2xl font-semibold">
                  Nest JS middleware`s and routing
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
                <p className="text-gray-500">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex mt-6 space-x-2">
                <span className="px-2 py-1 text-sm text-pink-700 font-medium bg-pink-50 rounded-full">Research</span>
              </div>
            </div>
          </div>
          <div className="">
            <Image 
            src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="main-image"
            width={1000}
            height={1000}
            className="w-full h-56 object-cover mb-4"
            />
            <div className="mt-6 lg:mt-0">
              <div className="space-y-3">
              <span className="text-sm text-[#1B4242] font-semibold">
                Mudassar Riaz 20 Dec 2023
              </span>
              <a href="#" className="flex justify-between">
              <h3 className="text-2xl font-semibold">
                  Nest JS middleware`s and routing
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
                <p className="text-gray-500">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex mt-6 space-x-2">
                <span className="px-2 py-1 text-sm text-pink-700 font-medium bg-pink-50 rounded-full">Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray mt-16" />
      <div className="flex justify-between items-center pt-5 pb-24">
        <a href="#" className="text-gray-600 font-medium flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Previous
        </a>
      <div className="flex space-x-2">
        <a href="#" className="px-2 py-1 font-medium text-blue-700 bg-blue-50 rounded-lg">1</a>
        <a href="#" className="px-2 py-1 font-medium text-gray-600">2</a>
        <a href="#" className="px-2 py-1 font-medium text-gray-600">3</a>
        <a href="#" className="px-2 py-1 font-medium text-gray-600">4</a>
      </div>
      <a href="#" className="text-gray-600 font-medium flex items-center gap-2">
        Next
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      </div>
    </>
  );
}
