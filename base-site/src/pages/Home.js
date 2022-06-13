import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      {/* 2 col section */}
      <section className='my-10'>
        <div className='grid grid-cols-2 gap-10 p-10 lg:max-w-7xl lg:mx-auto'>
          <div className='flex flex-col align-middle justify-center h-full'>
            <div className='h-max'>
              <span className='bg-slate-200 uppercase py-1 text-xs rounded-full px-2 font-medium'>
                What we do
              </span>
              <h2 className='font-extrabold text-3xl mt-5 mb-8'>
                You share your idea.
                <br />
                We get it done.
              </h2>
              <p className='font-bold text-lg mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                recusandae ab dignissimos.
              </p>
              <p className='text-lg mb-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur labore debitis quibusdam fugiat nesciunt aperiam ipsa
                quas sint mollitia, veritatis est molestiae nemo quam?
              </p>
              <div className='-ml-5'>
                <a href='/' className='btn-link text-lg'>
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className='ml-[64px] relative'>
              <img
                src='http://unsplash.it/g/1000/800?random&blur&gravity=center'
                alt=''
                className='rounded-3xl'
              />
            </div>
            <div className='absolute bg-primary-600 w-64 h-32 rounded-3xl -mt-[75px] p-5 text-white text-center flex flex-col justify-center'>
              <div className='text-4xl font-extrabold'>124</div>
              <div className='font-semibold'>Successful Projects</div>
            </div>
          </div>
        </div>
      </section>
      <div className='h-96'></div>
    </>
  )
}

export default Home
