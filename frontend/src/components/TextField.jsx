
function TextField({fieldLabel = "", fieldValue = "", onChangeFunc}) {

    const handleFieldChange = (evt) => {onChangeFunc(evt.target.value)}
    
    return (
        <section className="flex gap-2">
            <label htmlFor={fieldLabel}>{fieldLabel}</label>
            <input type="text" id={fieldLabel} onChange={handleFieldChange}/>
        </section>
    )
}

export default TextField