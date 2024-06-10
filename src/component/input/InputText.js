import './InputText.css';
import {useEffect} from "react";

function InputText({ entryLabel, entryType, reference, error, icon, className }) {

    useEffect(() => {
        console.log("Error : ", error)
        if(error) {
            reference.current.classList.add("error-input")
        } else {
            reference.current.classList.remove("error-input")
        }
        console.log(reference.current.classList)
    }, [error, reference]);

  return (
    <div className={`container ${ className }`}>
        <div className={`entryarea`}>
            <input
                className={`entry ${error ? "error-input" : ""}`}
                type={entryType}
                ref={reference}
                required
            />
            <div className={`entrylabel`}>
                {icon}
                {entryLabel}
            </div>
        </div>
    </div>
  );
}

export default InputText;