function Comunidad() {
    return (
        <>
            {/* SACAR LOS BORDES DESPUES */}
            <section className="bg-orange-50 px-26 py-26 ">
                <div className="max-w-7xl px-5 py-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center border-red-500">
                        <div className="col-span-2">
                            <h2 className="text-5xl font-fraunces font-bold text-gray-900 mb-6 text-justify">
                                Support Your<br />Community
                            </h2>
                             <hr className="border-gray-300 w-[25%] border-t-3 mt-6" ></hr>

                            <p className="text-gray-600 mb-8 max-w-md text-justify mt-6">
                                The target definition of a charity organization
                                ahead of charity causes fundraising sustainable and to
                                achieve them effectively and innovatively.
                            </p>

                            {/* IMAGEN VACUNA */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <img
                                        src="/imagenes/voluntarios.jpg/vacuna.jpg"
                                        alt="Covid"
                                        className="w-64 h-64 object-cover bg-center"
                                    />
                                    <h3 className="font-semibold">Covid - 19</h3>
                                </div>

                                {/* IMAGEN COMIDA */}
                                <div className="space-y-4">
                                    <img
                                        src="/imagenes/alimentos.jpg"
                                        alt="Food Bank"
                                        className="w-64 h-64 object-cover bg-center"
                                    />
                                    <h3 className="font-semibold">Food Bank</h3>
                                </div>
                            </div>
                        </div>

                        {/* IMAGEN BOTELLA */}
                        {/* <div className="relative w-3/5 h-9/10">
                            <img
                                src="/src/imagenes/agua.jpg"
                                alt="Safe Water"
                                className="w-full h-full object-cover bg-center "
                            />
                            <h3 className="font-semibold">Safe Water</h3>
                            <a href="#" className=" ">View All Campaign</a>
                        </div> */}

                        <div className="w-full h-full">
                            <div className="bg-white w-full h-5/6">
                                <img src="/imagenes/agua.jpg" alt=""
                                    className="w-full h-5/6 object-cover"
                                />
                                <h3 className="font-semibold p-5 text-left">Safe Water</h3>
                            </div>
                            <div className="mt-6">
                                <a href="#" className="underline">View All Campaign</a>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="border-gray-300 w-7/10 border-t-3 mx-auto mt-25"></hr>
            </section>
        </>
    )
}

export default Comunidad