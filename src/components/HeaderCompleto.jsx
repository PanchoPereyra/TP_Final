function HeaderCompleto() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

                {/* LADO IZQUIERDO */}
                <div className="bg-[#fdf9f2] flex flex-col justify-center px-10">
                    <h1 className="text-7xl font-fraunces font-bold text-justify text-gray-900 leading-tight">
                        Charity Is An <br /> Act Of A Soft <br /> Heart.
                    </h1>
                    <p className="mt-6 text-gray-600 max-w-md text-justify font-Fraunces">
                        We’ve spent the last 5 years helping over 25,0000 teams just like yourself create and sustain
                    </p>

                        <div className="max-w-4xl mx-auto flex items-center gap-12">
                            <button className="bg-green-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-green-800 transition">
                                Doná ahora
                            </button>

                            {/* CIRCULO CON TEXTO */}
                            <div className="relative w-40 h-40 flex items-center justify-center">

                                {/* TEXTO CIRCULAR */}
                                <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                                        />
                                    </defs>
                                    <text className="text-[10px] font-medium fill-black tracking-widest">
                                        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                            Learn about us through this video
                                        </textPath>
                                    </text>
                                </svg>

                                {/* CIRCULO AMARILLO E ICONO */}
                                <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
                                    <span className="text-black text-xl">▷</span>
                                </div>
                            </div>
                        </div>

                        
                        {/* REDES SOCIALES */}
                        <div className="space-x-15 pt-8 flex-justify-center">
                            <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Youtube</a><span>·</span>
                            <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Facebook</a><span>·</span>
                            <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Instagram</a><span>·</span>
                        </div>

                </div>
                

                {/* LADO DERECHO */}
                <div className="bg-yellow-400 flex flex-col">

                    {/* MENÚ */}
                    <nav className="flex justify-center space-x-8 p-6 text-gray-900 font-bold">
                        <a href="#">About Us</a>
                        <span>·</span>
                        <a href="#">Campaign</a>
                        <span>·</span>
                        <a href="#">Contact Us</a>
                    </nav>
                    <div className="relative w-full h-full">
                        <img
                            // src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            src="/imagenes/1.jpg"
                            alt="Children playing"
                            className="w-lg h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderCompleto