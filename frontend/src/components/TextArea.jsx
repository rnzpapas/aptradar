
function TextArea({txtContent, txtStyles, placeholder}) {
  return (
    <textarea placeholder={placeholder} className={`font-primary text-sm resize-none ${txtStyles}`}>
        {txtContent}
    </textarea>
  )
}

export default TextArea