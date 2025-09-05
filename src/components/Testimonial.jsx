import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonial() {
    return (
        <>
            <section className="bg-orange-50 px-6 py-16 border-red-500 border-2">
                <div className="max-w-4xl mx-auto border-green-500 border-2 flex flex-wrap">

                    {/* FOTO MUSTAFA */}
                    <div className="border-2 w-1/2 h-5/6">
                        <div className="bg-teal-600  overflow-hidden w-96 h-80">
                            <img
                                src="/src/imagenes/Mustafa.jpg"
                                alt="Mustafa Kamal"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* TEXTO MUSTAFA */}
                    <div className="w-4/8 h-1/4 border-sky-600 border-2 bg-right text-left bg-white">
                        <p className="text-gray-700 text-lg mb-4">
                            "We're very happy that the challenge went well, and we're grateful that we have a
                            partner in Charity Challenge when we could trust to help the best possible care of our
                            supporters."
                        </p>
                        <h3 className="font-semibold text-gray-900">Mustafa Kamal</h3>
                        <h4 className="text-gray-600 text-sm">Area, Group</h4>
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

                </div>
            </section >
        </>
    )
}

export default Testimonial