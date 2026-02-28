export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 border-t border-white/10 bg-black flex justify-center">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
                <p>&copy; {currentYear} Muralee G. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
