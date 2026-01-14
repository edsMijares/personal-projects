function Form ({ children, className = '' }) {
    return (
        <form className={"flex flex-col gap-5 " + className}>
            {children}
        </form>
    );
}

export default Form;