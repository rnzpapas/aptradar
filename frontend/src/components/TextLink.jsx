import { Link } from 'react-router-dom';

function TextLink({ path, txtContent, txtStyles}) {
  return (
    <Link to={path} className={`font-primary ${txtStyles}`}>
      {txtContent}
    </Link>
  )
}

export default TextLink