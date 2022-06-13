const Hero = ({ ...props }) => {
  return (
    <div className='bg-gray-500 flex items-center justify-center py-[200px]'>
      <div className='lg:max-w-7xl w-full px-12'>
        <div className='max-w-prose'>
          <h1 className='text-5xl font-light inline-block mb-10 text-white'>
            We provide construction management
          </h1>
          <div className='flex items-center gap-4'>
            <a className='btn-primary font-medium text-lg px-10 rounded-full' href='/'>
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
