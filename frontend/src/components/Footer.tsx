const Footer = () => {
    return (
        <footer className='bg-gray-900 py-6'>
            <div className='mx-auto max-w-7x1 px-6'>
                <p className='text-center text-sm text-white'>
                    &copy; {new Date().getFullYear()} - Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer;