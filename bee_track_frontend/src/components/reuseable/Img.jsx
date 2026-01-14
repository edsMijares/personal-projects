function Img({ src, alt, className }) {
    
    return (
        <img src={src} alt={alt} className={"select-none " + className} />
    );
}

export default Img;