import { useState } from 'react';

function Header() {
    
    const [busqueda, setBusqueda] = useState('');
    
    return (
        <header className='bg-red-600 p-4'>
            <div className='mx-auto flex max-w-7x1 items center gap-6'>
                <h1 className='text 2x1 font-bold text-white'>
                    DIA
                </h1>

                <input 
                type="text"
                placeholder='Buscar Productos...'
                arial-label='Buscar Productos'
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}
                className='w-full rounded-lg bg-white px-4 py-2 text-gray-900 outline-none'
                />
            </div>
        </header>
    );
}

export default Header;