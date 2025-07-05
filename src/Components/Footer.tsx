export function Footer() {
    return (
        <footer id="contact" className="bg-forest-green text-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="max-w-xl mx-auto mb-8 text-gray-300">I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.</p>
                <a href="mailto:name@email.com" className="bg-sunshine-yellow text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-sunshine-yellow-dark transition-colors inline-block">name@email.com</a>
                <div className="flex justify-center space-x-6 mt-10">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                        <svg className="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                    </a>
                    <p className="text-gray-400 self-center"> | </p>
                    <p className="text-gray-300 self-center font-semibold">(555) 123-4567</p>
                </div>
            </div>
        </footer>
    )

}