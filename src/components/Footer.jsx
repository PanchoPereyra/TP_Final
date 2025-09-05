function Footer() {

    return (
        <>
            <footer className="bg-white px-6 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Subscribe to our newsletter to get future information.
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                />
                                <button className="bg-teal-600 text-white px-6 py-2 rounded-r-lg hover:bg-teal-700">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li><a href="#" className="hover:text-gray-900">Home</a></li>
                                <li><a href="#" className="hover:text-gray-900">Community</a></li>
                                <li><a href="#" className="hover:text-gray-900">Campaign</a></li>
                                <li><a href="#" className="hover:text-gray-900">About us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li><a href="#" className="hover:text-gray-900">Partners</a></li>
                                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-900">Press</a></li>
                                <li><a href="#" className="hover:text-gray-900">Community</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Help</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                                <li><a href="#" className="hover:text-gray-900">Contact us</a></li>
                                <li><a href="#" className="hover:text-gray-900">Privee Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm">Desingned By Tanim Khan</p>
                        <p className="text-gray-600 text-sm">WWW.Dribbble.Com/Tanim_ui</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer