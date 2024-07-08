import {useState, useRef, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTypewriter } from 'react-simple-typewriter'
import { useIsVisible } from '../helpers/isVisible'
import projects from '../assets/projects.json'
import { useOutsideClick } from '../helpers/isVisible'

const Typewriter = ({words, loops, onDone}) => {
  const [text] = useTypewriter({
    words: words,
    loop: loops,
    onLoopDone: () => onDone()
  })

  return (
    <>
      <h1 className='expand text-4xl'>{text}</h1>
    </>
  )
}

const Home = () => {

  const [typewriterDone, setTypewriterDone] = useState(false)

  const onTypingDone = () => {
    setTypewriterDone(true)
  }

  const displayProjects = () => {
    return projects.map(project => 
        <ProjectItem project={project} />
      )
  }


  return (
    <div className='flex flex-col justify-center items-center w-full transition-all duration-500'>
       <Typewriter words={[`Hello, I'm Danny`]} loops={1} onDone={onTypingDone}/>
      <div className= {` flex flex-col justify-center items-center transition-all duration-500 ${typewriterDone ? 'opacity-100' : ' opacity-0 -translate-x-full'}`}>
        <div className='p-10 flex flex-row justify-center'>
          <p className='w-2/3'>I build full stack web apps and try to make cool things. Also Santa Clara University Alum.</p>
        </div>
        {/*Hello & Cards*/}
        <div className='flex md:flex-row flex-col justify-evenly items-center h-2/3 w-2/3'>
          <div className='w-full md:w-2/5 bg-purple-300 flex flex-col items-center h-80 justify-evenly rounded-lg hover-up my-5 sm:my-0'>
            <h2 className='text-xl text-purple-900'>LinkedIn</h2>
            <p className='text-center text-black p-2'>Check out my LinkedIn profile to see what I'm sharing with my network.</p>
            <img src="/circle-linkedin-512.webp" height={75} width={75}/>
            <a href="https://linkedin.com/in/danny-walsh-dev/" target="_blank"><button className='btn'>Visit</button></a>
          </div>
          <div className='w-full md:w-2/5 bg-purple-300 flex flex-col items-center h-80 justify-evenly rounded-lg hover-up sm:my-5 lg:md:my-0 '>
            <h2 className='text-xl text-xl text-purple-900'>Github</h2>
            <p className='text-center text-black p-2'>Check out my Github to see what I'm coding.</p>
            <img src="/25231.png" height={75} width={75}/>
            <a href="https://github.com/Hamilton02/" target="_blank"><button className='btn'>Visit</button></a>
          </div>
        </div>
        {/* Languages & Frameworks */}
        <div className='my-10 flex justify-center flex-col items-center'>
          <h2 className='text-3xl expand'>Languages</h2>
          <div className='w-full md:flex-row flex-col flex justify-evenly items-center my-10'>
            <div className='tag hover-up group'>
              <img src='/HTML5.png' width={75} height={75} className='tag-img' />
              <p className='tag-title'>HTML5</p>
            </div>
            <div className='tag hover-up group'>
              <img src='/CSS3.png' width={55} height={55} className='tag-img'/>
              <p className='tag-title'>CSS3</p>
            </div>
            <div className='tag hover-up group'>
              <img src='/JS.png' width={75} height={75} className='tag-img'/>
              <p className='tag-title'>Javascript</p>
            </div>
            <div className='tag hover-up group'>
              <img src='/py.png' width={75} height={75} className='tag-img' />
              <p className='tag-title'>Python</p>
            </div>
            <div className='tag hover-up group'>
              <img src='/C.png' width={75} height={75} className='tag-img' />
              <p className='tag-title'>C</p>
            </div>
          </div>
          <h2 className='text-3xl expand'>Frameworks</h2>
            <div className='flex-col md:flex-row flex justify-evenly my-10'>
              <div className='tag hover-up group'>
                <img src='/react.png' width={75} height={75} className='tag-img' />
                <p className='tag-title'>React.js</p>
              </div>
              <div className='tag hover-up group'>
                <img src='/ex.webp' width={75} height={75} className='tag-img' />
              <p className='tag-title'>Express.js</p>
              </div>
              <div className='tag hover-up group'>
                <img src='/django.png' width={65} height={65} className='tag-img' />
              <p className='tag-title'>Django</p>
              </div>
            </div>
            

        </div>

        <div className='w-4/5 flex flex-col justify-center items-center'>
          <h2 className='text-3xl expand'>Featured Projects</h2>
          {displayProjects()}
        </div>
      </div>
    </div>
  )
}


const ProjectItem = ({project}) => {
  const ref1 = useRef()
  const isVisible1 = useIsVisible(ref1)

  const [videoOpen, setVideoOpen] = useState(false)
  const videoRef = useRef()


  const displayTags = (tags) => {
    return tags.map(tag => 
        <p className='p-2 m-1 text-center border-2 border-gray-400 text-xs rounded-full hover-up h-8 lg:block'>{tag}</p>
      )
  }

  useOutsideClick(videoRef, () => setVideoOpen(false))

  return(
    <div className='flex w-full mb-10 transition'>
      <div ref={ref1} className={`flex px-10 py-5 flex-col h-min items-center lg:flex-row w-full group hover:bg-purple-900 justify-between bg-gray-600 transition-all rounded-lg lg:rounded-full ease-in duration-700 relative ${isVisible1 ? "opacity-100" : "opacity-0 -translate-x-full"}`}>
        <div className={`flex transition-all duration-1000 flex-col justify-center items-center  ${videoOpen ? 'center-absolute w-1/2 h-1/2 scale-150': 'h-full w-full lg:w-1/3 p-4 scale-100'}`}  ref={videoRef}>
          {project.video ? <iframe height={videoOpen ? '100%' : '100%'} width={videoOpen ? '100%' : "full"} src={project.video} title={project.title} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>: <img src={project.img} className='w-full'  /> }
          {project.video ? <button className={videoOpen ? `bg-black text-red-800 w-8 h-8 rounded-md justify-self-end align-self-end float-right t-10` : `bg-purple-800 h-10 w-28 rounded-full m-2`} onClick={() => setVideoOpen(!videoOpen)}>{videoOpen ? 'X' : 'Expand'}</button> : <></> }
        </div>
       
        <div className='flex flex-col justify-center p-5'>
        <h3 className='text-xl text-center'>{project.title}</h3>
        <p className='text-sm'>{project.description}</p>
        {project.link ? <a href={project.link} className='underline text-purple-500 hover:text-purple-300' target='_blank'>Visit</a> : <></>}
        </div>
        <div className='jsutfiy-self-start flex flex-row w-full flex-wrap'>
          {displayTags(project.tags)}
        </div>
      </div>
    </div>
  )

}


export default Home
