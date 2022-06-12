import Button from '../components/Button'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className='p-5 flex items-center gap-4'>
        <button className='btn btn-primary'>btn-primary</button>
        <button className='btn btn-secondary'>btn-secondary</button>
        <button className='btn btn-tertiary'>btn-tertiary</button>
      </div>
      <div className='p-5 flex items-center gap-4'>
        <button className='btn btn-outline-primary'>btn-outline-primary</button>
        <button className='btn btn-outline-secondary'>btn-outline-secondary</button>
        <button className='btn btn-outline-tertiary'>btn-outline-tertiary</button>
      </div>
      <div className='p-5 flex items-center gap-4'>
        <button className='btn btn-primary'>btn-primary</button>
        <button className='btn btn-secondary'>btn-secondary</button>
        <button className='btn btn-tertiary'>btn-tertiary</button>
      </div>
    </>
  )
}

export default Home
