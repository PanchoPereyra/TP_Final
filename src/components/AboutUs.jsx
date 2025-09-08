
function AboutUs() {
    return (
        <>
            <section className="bg-orange-50 px-6 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border">
                    <div className="">

                        {/* IMAGEN*/}
                        <img
                            src="/src/imagenes/voluntarios.jpg"
                            alt="Mustafa Kamal"
                            className="ml-25 z-1 top-0 left-0 w-80 min-h-[420px] object-cover rounded-b-full"
                        />
                    </div>

                    <div className="bg-white pl-3 pt-8 pr-8 text-justify w-3/4">
                        <h2 className="text-5xl text-gray-900 font-fraunces text-justify">About Us</h2>
                        <hr className="border-gray-300 w-[25%] border-t-3 mt-2" ></hr>
                        <p className="text-gray-600 text-justify pt-8 pr- pb-8">
                            The target definition of a charity organization ahead of
                            charity causes fundraising sustainable and to achieve them
                            effectively and innovatively. Helped fund 24,537 projects
                            in 17 countries, benefiting over 8.2 million people.
                        </p>
                        <button className="font-bold text-justify underline">
                            Read More
                        </button>
                    </div>
                </div>
               <hr className="border-gray-300 w-7/10 border-t-3 mx-auto mt-25"></hr>
            </section>
        </>
    )
}

export default AboutUs