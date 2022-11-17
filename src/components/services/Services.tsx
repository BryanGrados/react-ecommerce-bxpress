const Services = () => {
    return (
        <section className="text-gray-600 dark:text-gray-300">
            <div className="container py-24 mx-auto space-y-5">
                <div className="flex flex-col">
                    <h1 className="mb-4 text-2xl font-medium text-black dark:text-white sm:text-3xl">Our Services</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4">We offer a wide range of services to satisfy your needs. We are a one-stop shop for all your needs.</p>
                </div>
            </div>
            <div className="container py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                        <div className="flex flex-col h-full p-8 bg-white border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 text-white bg-indigo-500 rounded-full fill-current">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-medium text-gray-900 title-font dark:text-white">Web Development</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We offer a wide range of services to satisfy your needs. We are a one-stop shop for all your needs.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="flex flex-col h-full p-8 bg-white border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 text-white bg-indigo-500 rounded-full fill-current">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-medium text-gray-900 title-font dark:text-white">Web Design</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We offer a wide range of services to satisfy your needs. We are a one-stop shop for all your needs.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="flex flex-col h-full p-8 bg-white border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 text-white bg-indigo-500 rounded-full fill-current">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-medium text-gray-900 title-font dark:text-white">Mobile Development</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We offer a wide range of services to satisfy your needs. We are a one-stop shop for all your needs.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services