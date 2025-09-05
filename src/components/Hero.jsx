
export default Hero

function Hero() {
    return (
        <>
            <section className="bg-yellow-400 px-6 pb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Charity Is An<br />
                            Act Of A Soft<br />
                            Heart.
                        </h1>
                        <p className="text-gray-700 text-lg max-w-md">
                            We spread the love 3 years helping over 25,00000
                            children get the help they so need worldwide.
                        </p>
                        <div className="max-w-4xl mx-auto flex items-center gap-12">
                            <button className="bg-green-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-green-800 transition">
                                Donate Now
                            </button>

                            {/* Círculo con texto */}
                            <div className="relative w-40 h-40 flex items-center justify-center">
                                {/* Texto circular */}
                                <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                                        />
                                    </defs>
                                    <text className="text-[10px] font-medium fill-black tracking-wider">
                                        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                            Learn about us through this video
                                        </textPath>
                                    </text>
                                </svg>

                                {/* Círculo amarillo con ícono */}
                                <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
                                    <span className="text-black text-xl">▷</span>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociales */}
                        <div className="flex space-x-8 pt-8">
                            <a href="#" className="text-gray-900 hover:text-gray-700">Youtube</a>
                            <a href="#" className="text-gray-900 hover:text-gray-700">Facebook</a>
                            <a href="#" className="text-gray-900 hover:text-gray-700">Instagram</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}



