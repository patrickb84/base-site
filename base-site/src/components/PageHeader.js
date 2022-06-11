const PageHeader = ({ text, className = 'bg-gray-500' }) => {
  return (
    <div className={`flex items-center justify-center h-1/2 ${className}`}>
      <h1 className='text-6xl font-light text-center text-zinc-100 inline-block'>
        {text}
      </h1>
    </div>
  );
};

export default PageHeader;
