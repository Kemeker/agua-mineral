import React from "react"
import Logo from '../assets/fiveicon.png'


function Section01({style}){

   
    return(
        <section className="bg-whait py-20" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Bem Vindo a Água Mineral Jupiá</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A Melhor água das americas esta aqui.
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            
                        </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                            <div className="shrink-0">
                                <img className="h-12 w-12" src={Logo} alt="Workflow" />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Quem somos</div>
                                    <p className="text-gray-500">Concessionaria de Água Mineral Jupiá. </p>
                                </div>
                            </div>

                    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div className="shrink-0">
                            <img className="h-12 w-12" src={Logo} alt="Workflow" />
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">Produtos</div>
                                <p className="text-gray-500">Água Mineral.</p>
                            </div>
                        </div>

                    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div className="shrink-0">
                            <img className="h-12 w-12" src={Logo} alt="Workflow" />
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">Fonte</div>
                                <p className="text-gray-500">Fonte Ferradura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Section01