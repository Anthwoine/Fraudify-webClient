import './InputText.css';
import {useEffect} from "react";

function InputText({ entryLabel, entryType, reference, error, icon, className, inputHandler, value }) {

    useEffect(() => {
        if(error) {
            reference.current.classList.add("error-input")
        } else {
            reference.current.classList.remove("error-input")
        }
    }, [error, reference]);

  return (
    <div className={`container ${ className }`}>
        <div className={`entryarea`}>
            <input
                className={`entry ${error ? "error-input" : ""}`}
                type={entryType}
                ref={reference}
                required
                onChange={inputHandler}
                value={value}
            />
            <div className={`entrylabel`}>
                {icon}
                <span className={"placeholder"}>{entryLabel}</span>
            </div>
        </div>
    </div>
  );
}

export default InputText;