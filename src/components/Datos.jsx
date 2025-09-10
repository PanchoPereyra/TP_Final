function Datos() {
    return (
        <>
            <section className="bg-teal-600 px-15 py-12">
                <div className="max-w-7xl mx-5 grid grid-cols-2 lg:grid-cols-8 gap-4 text-center ">
                    {/* flex justify-between */}

                    <div className="">
                        <img src="/imagenes/corazon.png"
                            alt=""
                            className="w-20 h-20  bg-center"
                        />
                    </div>
                    <div className="text-black">
                        <div className="text-3xl font-bold">985+</div>
                        <div className="text-sm opacity-90">Donation Received</div>
                    </div>

                    <div>
                        <img src="/imagenes/caja-abierta-con-dos-corazones.png"
                            alt=""
                            className="w-20 h-20  bg-center"
                        />
                    </div>
                    <div className="text-black">
                        <div className="text-3xl font-bold">$10 M</div>
                        <div className="text-sm opacity-90">Money Donated</div>
                    </div>

                    <div>
                        <img src="/imagenes/corazon+altavoz.png"
                            alt=""
                            className="w-20 h-20  bg-center"
                        />
                    </div>
                    <div className="text-black">
                        <div className="text-3xl font-bold">12+</div>
                        <div className="text-sm opacity-90">Active Campaigns</div>
                    </div>

                    <div>
                        <img src="/imagenes/simbolo-de-la-paz.png"
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