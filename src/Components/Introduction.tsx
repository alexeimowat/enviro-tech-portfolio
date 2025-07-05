export function Introduction() {
    const imageURL = "url('https://images.unsplash.com/photo-1558732599-2f570f74af6e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    
    return (
    
        <section className="min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: imageURL }}>
            <div className="bg-black/50 w-full h-full absolute top-0 left-0 mt-16"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
                    Environmental Technician
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Passionate about sustainable solutions, ecological restoration, and data-driven environmental protection.
                </p>
                <a 
                    href="#projects" 
                    className="bg-sunshine-yellow text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-sunshine-yellow-dark transition-transform transform hover:scale-105 inline-block"
                >
                    View My Work
                </a>
            </div>
        </section>
    )
}
