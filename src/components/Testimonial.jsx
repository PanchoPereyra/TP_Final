import { ChevronLeft, ChevronRight } from "lucide-react";


function Testimonial() {
    return (
        <>
            <section className="mb-24 px-6 py-16 relative bg-orange-50">

                <div className="relative">
                    {/* IMAGEN*/}
                    <img
                        src="/src/imagenes/mustafa_fondo_amarillo.png"
                        alt="Mustafa Kamal"
                        className="absolute z-1 top-0 left-0 w-1/2 min-h-[420px] object-cover rounded-b-full"
                    />

                    {/* ESTRELLA */}
                    <div className="absolute top-6 left-6 bg-green-600 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="text-yellow-300">★</span>
                        5.0
                    </div>
                </div>

                {/* TEXTO */}
                <div className="bg-white relative ml-[45%] pl-6 flex items-center h-full bg-right">
                    <div className="py-8 px-15 max-w-xl bg-withe text-justify">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                            pariatur dicta laborum doloremque officia nihil. Omnis soluta nisi
                            ullam est, non recusandae. Facilis, voluptas dolorum adipisci ullam
                            impedit culpa tempore?
                        </p>
                        <h3 className="mt-6 font-semibold text-2xl font-fraunces">Mustafa Kamal</h3>
                        <small>CEO, Toggle</small>
                    </div>
                </div>

                {/* BOTONES */}
                <div className="flex justify-center space-x-4 mt-6">
                    {/* IZQUIERDA */}
                    <button className="p-3 rounded-full hover:bg-gray-200 transition">
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    {/* DERECHA */}
                    <button className="p-3 rounded-full bg-yellow-300 hover:bg-yellow-400 transition shadow">
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

            </section>


        </>
    );
}

export default Testimonial