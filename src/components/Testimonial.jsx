import { ChevronLeft, ChevronRight } from "lucide-react";


function Testimonial() {
    return (
        <>
            <section className="bg-orange-50 relative ml-35">
                <hr className="border-gray-300 w-7/10 border-t-3 mx-auto mt-25"></hr>

                <div className="flex justify-center py-16 relative">
                    <div className="flex items-center w-[75%] bg-white relative">
                        <div className="absolute left-0 top-0 -ml-30 z-20">
                            <div className="w-[380px] h-[380px] bg-[#d1bfa7] rounded-b-full overflow-hidden">
                                <img
                                    src="/imagenes/mustafa_fondo_amarillo.png"
                                    alt="About us"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* ESTRELLA */}
                            <div className="absolute top-0 left-0 bg-[#00715F] text-white px-4 py-[6.5%] rounded-b-full flex items-center font-semibold text-sm">
                                <span>⭐5.0</span>
                            </div>
                        </div>
                        <div className="ml-[40%] text-left p-8 relative z-20 w-[45%]" >
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                "We're very happy that the challenge went well, and we're grateful
                                that we have a partner in Charity Challenge whom we could trust to
                                take the best possible care of our supporters."
                            </p>
                            <h3 className="text-xl font-fraunces text-[#1A3A2D] mb-1">Mustafa Kamal</h3>
                            <span className="text-gray-500 text-sm">CEO, Toogle</span>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center gap-6">
                    <div className="flex items-center justify-center ">

                        {/* FLECHA IZQUIERDA */}
                        <button className="relative p-3 rounded-full bg-transparent group hover:bg-[#FDD65B]/40 transition-colors overflow-visible">
                            <svg className="w-6 h-6 text-[#1A3A2D] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="absolute -bottom-0 -left-0 w-6 h-6 border-2 border-[#FDD65B] border-r-transparent border-t-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none" />
                        </button>

                        {/* FLECHA DERECHA */}
                        <button className="relative p-3 rounded-full bg-transparent group hover:bg-[#FDD65B]/40 transition-colors overflow-visible">
                            <svg className="w-6 h-6 text-[#1A3A2D] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="absolute top-0 right-0 w-6 h-6 border-2 border-[#FDD65B] border-l-transparent border-b-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none" />
                        </button>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-20"></div>
            </section>


        </>
    );
}

export default Testimonial