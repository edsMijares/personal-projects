function Btn({ name = 'Default', type = 'text', Icon = null, className = '' }) {
    return (
        <button
            type={type}
            className={
                "btn-active flex flex-row h-fit rounded-md py-1 px-5 my-auto gap-2 " +
                className
            }
        >
            {Icon && <Icon className="my-auto" />} {name}
        </button>
    );
}

export default Btn;
