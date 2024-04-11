import React from "react"
import Logo from '../assets/fiveicon.png'


function NavBar(){

 return(
                <div className="bg-gray-800 text-white">
                    <div className="max-w-7x1 mx-auto px-2 sm:px-6 lg:px-1">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                
                                
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                            
                                    <img className="block lg:hidden h-8 w-auto" src={Logo} alt="Workflow" />
                                    <img className="hidden lg:block h-8 w-auto" src={Logo} alt="Workflow" />
                                </div>
                            <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                
                                        <a href="#" className="px-4 py-2 rounded-md text-sm font-medium bg-gray-900 text-white">Home</a>
                                        
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                    </div>

               
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 text-white">Home</a>
                            
                        </div>
                    </div>
                </div>
    

    )
}

export default NavBar