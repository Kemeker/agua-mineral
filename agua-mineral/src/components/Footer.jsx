import React from "react"
import WhatsApp from '../assets/whatsapp2.png'
import Instagram from '../assets/instagram.png'


function Footer(){
    return(
        <footer className="bg-gray-800 text-white flex row-auto bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Suporte</h2>
                        <ul className="text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">FAQ</a>
                            </li>
                            
                        </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Redes Sociais</h2>
                            <div className="flex space-x-6">
                            
                            <a href="https://wa.me/49999518238" className="text-gray-400 hover:text-white" target='_blank'>
                                <span className="sr-only">WhatsApp</span>
                                <img src={WhatsApp} alt="whatsapp"  width='25px' />
                            </a>
                            <a href="https://www.instagram.com/marcosandrecossa/" className="text-gray-400 hover:text-white" target='_blank'>
                                <span className="sr-only">Instagram</span>
                                <img src={Instagram} alt="Instagram" width='25px' />
                                
                                
                            </a>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                            <ul className="text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Politica de Privacidade</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Termos de Uso</a>
                            </li>
                            
                            </ul>
                        </div>
                        </div>
                    <div className="mt-8 border-t border-gray-700 pt-6">
                    <p className="text-center text-gray-400 text-sm">&copy; 2024 Água Mineral Jupiá, Inc. Todos direitos reservados.</p>
                </div>
            </div>
        </footer>


    )
}

export default Footer