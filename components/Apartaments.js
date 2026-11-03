"use client";
import { motion } from "framer-motion";

export default function Apartaments() {
    return (
        <section className="py-20 bg-[#f5f3ef] text-center">
            <h2 className="text-3xl font-light mb-8">Apartamentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div>
                    <h3 className="text-lg font-medium mb-2">Apartamento Tipo</h3>
                    <p className="text-gray-700">531 m² / 4 suítes / 5 vagas</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-2">Duplex</h3>
                    <p className="text-gray-700">1.035 m² / 5 suítes / 7 vagas</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-2">Triplex</h3>
                    <p className="text-gray-700">1.560 m² / 4 suítes / 8 vagas</p>
                </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">
                * Depósito e office exclusivos para todas as unidades
            </p>
        </section>

    );
}
