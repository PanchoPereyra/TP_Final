

function Header() {

    return (
        <>
            <header className="bg-yellow-400  px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <nav className="flex space-x-8">
                        <a href="#" className="text-gray-900 hover:text-gray-700">About Us</a>
                        <a href="#" className="text-gray-900 hover:text-gray-700">Campaign</a>
                        <a href="#" className="text-gray-900 hover:text-gray-700">Contact Us</a>
                    </nav>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Children playing"
                            className="w-full h-96 object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header