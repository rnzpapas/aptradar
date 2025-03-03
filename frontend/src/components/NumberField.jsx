
function NumberField({fieldLabel = "", fieldValue = "", fieldPlaceholder = "", fieldStyles, onChangeFunc}) {

    const handleFieldChange = (evt) => {onChangeFunc(evt.target.value)}
    
    return (
        <section className="flex gap-2">
            <label htmlFor={fieldLabel} className="font-primary">{fieldLabel}</label>
            <input type="number" id={fieldLabel} onChange={handleFieldChange} placeholder={fieldPlaceholder} className={`appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none outline-0 font-primary ${fieldStyles}`}/>
        </section>
    )
}

export default NumberField