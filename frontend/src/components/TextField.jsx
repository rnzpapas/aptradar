
function TextField({fieldLabel = "", fieldValue = "", fieldPlaceholder = "", fieldStyles, onChangeFunc}) {

    const handleFieldChange = (evt) => {onChangeFunc(evt.target.value)}
    
    return (
        <section className="flex gap-2">
            <label htmlFor={fieldLabel} className="font-primary">{fieldLabel}</label>
            <input type="text" id={fieldLabel} onChange={handleFieldChange} placeholder={fieldPlaceholder} className={`outline-0 font-primary ${fieldStyles}`}/>
        </section>
    )
}

export default TextField