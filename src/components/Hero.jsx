import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={ logo } alt= "logo_website"
        className="w-28 object-contain" /> */}

      </nav>

      <h1 className='head_text'>
        Sum Up Your Articles With <br className='max-md:hidden' />
        <span className='bluee_gradient'>Open AI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading experience with Sumz, 
        an article summarizer that transforms lengthy articles
        into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero