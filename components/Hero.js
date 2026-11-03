export default function Hero() {
    return (
        <section
            className="relative h-screen bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white"
            style={{ backgroundImage: "url('/piscina.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-light tracking-wide">Le Six Ibirapuera</h1>
                <p className="mt-4 text-xl font-light">O padrão seis estrelas chegou a Moema</p>
            </div>
        </section>

    );
}
