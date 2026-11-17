import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { productos } from './data/productos';

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      <main className='mx-auto max-w-7x1 p-6'>
        <h1 className='mb-6 text-2x1 font-bold text-gray-900'>
          Nuestros Productos
        </h1>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
          {productos.map((producto) => (
           <ProductCard
           key={producto.id}
           nombre={producto.nombre}
           precio={producto.precio}
           imagen={producto.imagen}
           />
          ))}
        </div>
      </main>
    </div>
    );
}

export default App;