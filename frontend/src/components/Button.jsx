
function Button({txtContent, btnStyles, btnClickFunc, isActive = true}) {
  return (
    <button 
    className={`uppercase font-semibold p-2 ${isActive ? 'bg-blue text-white' : 'border border-blue text-blue bg-white'} ${btnStyles}`}
    onClick={btnClickFunc}
    > 
        {txtContent} 
    </button>
  )
}

export default Button