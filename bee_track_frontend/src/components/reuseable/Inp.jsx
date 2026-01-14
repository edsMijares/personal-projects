import { FaEye } from "react-icons/fa";
function Inp({value='', name="Default", placeholder="", label=false, pos="bottom-center", style = 1, type="text", s="300px", onChange = null}) {
    var classStyle = ""
    var labelPosition = ""
    switch(style) {
        case 1:
            classStyle += " text-black ";
            break;
    }
    switch(pos) {
        case "top":
            labelPosition += " flex-col ";
            break;
        case "top-center":
            labelPosition += " flex-col items-center ";
            break;
        case "bottom":
            labelPosition += " flex-col-reverse ";
            break;
        case "bottom-center":
            labelPosition += " flex-col-reverse items-center ";
            break;
        case "left":
            labelPosition += " flex-row gap-2 ";
            break;
        default:
            break;
    }
    const showPassword = () => {
        const input = document.getElementById(name);
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }
    return (
        <div className={"flex select-none " + labelPosition}>
            {label && <label className="text-primary-gray" htmlFor={name}>{name}</label>}
            <div className="flex flex-row relative">
                <input
                    id={name}
                    placeholder={placeholder}
                    type={type}
                    style={{width: s}}
                    className={"px-2 py-1 rounded text-sm focus:outline-none " + classStyle}
                    value={value}
                    onChange={onChange} />
                {type === "password" && <FaEye className="bg-white text-primary-gray cursor-pointer absolute me-1 right-0 top-[24%]" onClick={showPassword} />}
            </div>
        </div>
    );
}

export default Inp;
