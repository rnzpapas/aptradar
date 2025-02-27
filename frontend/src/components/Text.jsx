
function Text({ txtContent, txtStyles}) {
  return (
    <h5 className={`font-primary ${txtStyles}`}>
      {txtContent}
    </h5>
  )
}

export default Text