
function SelectField({selectLabel = "", choices = []}) {
  return (
    <section>
        <label htmlFor={selectLabel}>{selectLabel}</label>
        <select id={selectLabel}>
            {
                choices.map((choice, index) => (
                    <option value={choice}>{choice}</option>
                ))
            }
        </select>
    </section>
  )
}

export default SelectField