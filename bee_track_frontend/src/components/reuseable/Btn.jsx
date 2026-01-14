function Btn({ name = 'Default', type = 'button', Icon = null, IconSize = 24, iconClass = '', className = '', onClick = null, style = 1 }) {
    var classStyle = '';
    switch (style) {
        case 1:
            classStyle += ' bg-primary-yellow text-black text-primary-black font-bold mx-5 ';
            break;
        case 2:
            classStyle += ' bg-primary-gray text-primary-black font-bold mx-5 ';
            break;
        default:
            break;
    }

    return (
        <button
            type={type}
            className={
                "btn-active flex flex-row h-fit rounded-md py-1 px-5 my-auto select-none " +
                className + classStyle
            }
            onClick={onClick}
        >
            {Icon && <Icon className={"my-auto inline " + iconClass} size={IconSize} />} {name}
        </button>
    );
}

export default Btn;
