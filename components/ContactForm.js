export default function ContactForm() {
    return (
        <section className="py-20 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Quero receber informações</h2>
            <form className="grid gap-6">
                <input type="text" placeholder="Nome" className="border p-3 rounded" />
                <input type="email" placeholder="E-mail" className="border p-3 rounded" />
                <input type="tel" placeholder="Telefone" className="border p-3 rounded" />
                <button className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 text-white">
                    Enviar
                </button>
            </form>
        </section>
    );
}
