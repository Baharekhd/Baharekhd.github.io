export function Footer() {
    return (
        <footer
            className="py-12 px-6 border-t border-white/10"
            style={{
                background:
                    "linear-gradient(135deg, hsl(330,100%,75%) 0%, hsl(340,90%,80%) 50%, hsl(320,100%,90%) 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/70 font-light">
                        © {new Date().getFullYear()} Bahareh. All rights
                        reserved.
                    </p>

                    <p className="text-white/70 font-light">
                        Designed & Built with ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}
