
function AboutUs() {
    return (
        <>
            <section className="bg-orange-50 px-6 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            alt="Team members"
                            className="w-80 h-80 object-cover rounded-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                        <p className="text-gray-600 mb-6">
                            The target definition of a charity organization ahead of
                            charity causes fundraising sustainable and to achieve them
                            effectively and innovatively. Helped fund 24,537 projects
                            in 17 countries, benefiting over 8.2 million people.
                        </p>
                        <button className="text-teal-600 font-medium hover:underline">
                            Read More
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}