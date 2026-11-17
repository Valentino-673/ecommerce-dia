type ProductCardProps = {
    nombre: string;
    precio: number;
    imagen: string;
};

function ProductCard({ nombre, precio, imagen}: ProductCardProps) {
    return (
        <article className='rounded-lg border border-gray-200 p-4 shadow-sm'>
            
            <img 
            src={imagen}
            alt={nombre} 
            className='mb-4 h-40 w-full object-contain'
            />
            
            <h2 className='text-lg font-semibold'>
                {nombre}
            </h2>
            <p className='mt-2 text-xl font-bold text-red-600'>
                ${precio}
            </p>

            <button
                type='button'
                className='mt-4 w-full rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700'
            >
                Agrear al carrito
            </button>
        </article>
    );
}

export default ProductCard;