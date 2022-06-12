import { Link } from 'react-router-dom';

const Button = ({ children, to, link, variant, ...props }) => {
  const className = `btn btn-primary`;

  return link ? (
    <Link className={className} to={to} {...props}>
      {children}
    </Link>
  ) : (
    <button className={`block px-5 py-2.5 text-sm font-medium text-white transition rounded-md shadow bg-${variant}-500 hover:bg-${variant}-600 active:bg-${variant}-700 focus:outline-none focus:ring`}>{children}</button>
  );
};

export default Button;
