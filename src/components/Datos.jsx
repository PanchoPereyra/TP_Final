function Datos() {
    return (
        <>
            <section className="bg-teal-600 px-6 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-8 gap-8 text-center ">
                    {/* flex justify-between */}

                    <div className="border-2">
                        <img src="/src/imagenes/corazon.png"
                            alt=""
                            className="w-20 h-20  bg-center"
                        />
                    </div>
                    <div className="text-black border-2">
                        <div className="text-3xl font-bold">985+</div>
                        <div className="text-sm opacity-90">Donation Received</div>
                    </div>

                    <div>
                        <img src="/src/imagenes/caja-abierta-con-dos-corazones.png"
                            alt=""
                            className="w-20 h-20  bg-center"
                        />
                    </div>
                    <div className="text-black">
                        <div className="text-3xl font-bold">$10 M</div>
                        <div className="text-sm opacity-90">Money Donated</div>
                    </div>

                    <div>
                        <img src="/src/imagenes/corazon+altavoz.png"
                            alt=""
                            className="w-20 h-20  bg-center"
                        />
                    </div>
                    <div className="text-black">
                        <div className="text-3xl font-bold">12+</div>
                        <div className="text-sm opacity-90">Active Campaigns</div>
                    </div>

                    <div>
                        <img src="/src/imagenes/simbolo-de-la-paz.png"
                            alt=""
                            className="w-20 h-20  bg-center"
                        />
                    </div>
                    <div className="text-black">
                        <div className="text-3xl font-bold">$60 M</div>
                        <div className="text-sm opacity-90">Charity in last Year</div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Datos