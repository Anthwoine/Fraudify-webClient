import './InputText.scss';
import {forwardRef} from "react";

 const InputText = forwardRef(({ placeholder, icon }, ref) => {
     return (
        <div className={"input"}>
            <input
                className={"input-entry"}
                placeholder={ placeholder }
                type={"text"}
                ref={ref}
            />
            <div className={"entry-icon"}>
                {icon}
            </div>
        </div>
    )
});

export default InputText;