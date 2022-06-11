import { Link } from 'react-router-dom';

const Button = ({ children, to, link, variant, ...props }) => {
  const className = `btn btn-${variant}`;

  return link ? (
    <Link className={className} to={to} {...props}>
      {children}
    </Link>
  ) : (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
};

export default Button;
