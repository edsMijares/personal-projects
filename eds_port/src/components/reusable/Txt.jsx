function Txt({ placeholder = 'Your Message', className = '' }) {
    return (
        <textarea placeholder={placeholder} className={"w-full p-3 rounded-md h-32 " + className}></textarea>
    );
}

export default Txt;
