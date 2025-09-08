function OurTeam() {
    return (
        <>
            <section className="bg-orange-50 px-6 py-16">

                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-5xl font-bold text-gray-800 font-fraunces">Our Team</h2>
                    <div className="w-16 h-0.5 bg-gray-400 mx-auto my-3"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12">

                        {/* LILY GOMEZ */}
                        <div className="text-center">
                            <div className="relative w-36 h-36 mx-auto borde">
                                <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-80"></div>
                                <img
                                    src="/src/imagenes/Lily.png"
                                    alt="Lily Gomez"
                                    className="relative w-full h-36 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-800  font-fraunces">Lily Gomez</h3>
                            <p className="text-gray-500 text-sm">Founder</p>
                        </div>

                        {/* DM LINCOLN */}
                        <div className="text-center">
                            <div className="relative w-36 h-36 mx-auto">
                                <div className="absolute inset-0 rounded-full bg-green-700 opacity-80"></div>
                                <img
                                    src="/src/imagenes/dm_uno.jpg"
                                    alt="Dm Lincoln"
                                    className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-800  font-fraunces">Dm Lincoln</h3>
                            <p className="text-gray-500 text-sm">Co-Founder</p>
                        </div>

                        {/* SERENA MEI */}
                        <div className="text-center">
                            <div className="relative w-36 h-36 mx-auto">
                                <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-80"></div>
                                <img
                                    src="/src/imagenes/Serena.jpg"
                                    alt="Serena Mei"
                                    className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-800 font-fraunces  font-fraunces">Serena Mei</h3>
                            <p className="text-gray-500 text-sm">Manager</p>
                        </div>

                        {/* ADBEL LATIF */}
                        <div className="text-center">
                            <div className="relative w-36 h-36 mx-auto">
                                <div className="absolute inset-0 rounded-full bg-green-700 opacity-80"></div>
                                <img
                                    src="/src/imagenes/abdel_1.jpg"
                                    alt="Abdel Latif"
                                    className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-800  font-fraunces">Abdel Latif</h3>
                            <p className="text-gray-500 text-sm">Supervisor</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam