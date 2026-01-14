function Inp({ type = 'text', placeholder = 'Enter text', className = '' }) {
    return (
        <input type={type} placeholder={placeholder} className={" " + className} />
    );
}

export default Inp;
