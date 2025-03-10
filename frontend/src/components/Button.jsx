
function Button({txtContent, btnStyles, btnClickFunc, isActive = true}) {
  return (
    <button 
    className={`uppercase font-semibold p-2 cursor-pointer text-xtrasm tracking-wide md:text-sm lg:text-md ${isActive ? 'bg-blue text-white hover:bg-blue/95' : 'border border-blue text-blue bg-white'} ${btnStyles}`}
    onClick={btnClickFunc}
    > 
        {txtContent} 
    </button>
  )
}

export default Button