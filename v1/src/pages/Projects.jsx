import {useState} from 'react'
import { Link, useOutlet } from 'react-router-dom'
import '../styles/projects.css'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useLocation } from 'react-router-dom'


const Projects = () => {

  const params = useLocation()

  const [wordleOpen, setWordleOpen] = useState(false)
  const [coen161Open, setCoen161Open] = useState(false)
  const [webDev, setWebDev] = useState(false)
  const [arts177 , setArts177] = useState(false)
  const [demos, setDemos] = useState(false)

  const outlet = useOutlet()

  let content

  console.log(params)

  if(wordleOpen || params.pathname.includes('recoverycafe')){
    content = outlet
  }else{
    content = (
    <div>
      <h1>Projects</h1>
      <div className='project-section'>
        <div className='project-header'>
        <h2>Demos</h2>
          <button onClick={() => setDemos(!demos)}>{demos ? <ChevronUpIcon height={24} width={24}/> : <ChevronDownIcon height={24} width={24} />}</button>
        </div>
        {demos ? 
        <>
          <p>Here are video demos of platforms I have created and don't have hosted right now.</p>
          <h3>PortalPortal</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wRRt0xDwryw?si=NtVioR23Kpx2hbcH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <h3>Fit4U</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9VuDxbtWGNU?si=xMrUkvYneJ7bcGFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </> : <></>}
      </div>
      <div className='project-section'>
        <div className='project-header'>
          <h2>SCU Student Web Developer</h2>
          <button onClick={() => setWebDev(!webDev)}>{webDev ? <ChevronUpIcon height={24} width={24}/> : <ChevronDownIcon height={24} width={24} />}</button>
        </div>
        { webDev ? 
          <>
            <p>For two years at Santa Clara University, I worked part-time as a student web developer, helping to create three web pages for two different projects. In this work, I used HTML, CSS, JavaScript, and bootstrap to create informative and interactive pages for people to learn from. The biggest skills I picked up in this role are working within a framework, ADA compliance and design principles. </p>
            <h3>Ohlone Heritage Hub</h3>
            <p>Working with Dr. Lueck and Dr. Panich, I created the Ohlone Heritage Hub, which is still used by the school today to demonstrate how important the Ohlone are to Santa Clara's history. </p>
            <a href="https://www.scu.edu/community-heritage-lab/ohlone-heritage-hub/" target='_blank'><button className='btn'>Ohlone Heritage Hub</button></a>

            <h3>Living Religion Collaborative</h3>
            <p>After the Ohlone Heritage Hub project was complete, I moved onto helping the Living Religion Collaborative with Dr. Drescher and Dr. Wright to update their website, as well as using ArcGIS to create an interactive map viewing site.</p>
            <a href="https://www.scu.edu/livingreligions/" target='_blank'><button className='btn'>Living Religion Collaborative</button></a>
            <br></br>
            <br></br>
            <a href="https://finding-god-in-googleville-livingrelgsscu.hub.arcgis.com/" target='_blank'><button className='btn'>Finding God in Googlevile</button></a>
          </>
          :
          <></>
        }
      </div>
      <div className='project-section'>
        <div className='project-header'>
          <h2>ARTS 177: Website Graphic Design</h2>
          <button onClick={() => setArts177(!arts177)}>{arts177 ? <ChevronUpIcon height={24} width={24}/> : <ChevronDownIcon height={24} width={24} />}</button>
        </div>
        { arts177 ? 
          <>
            <p>As apart of my studies, I took a Website Graphic Design class to help with the artistic side of Frontend Development. This class helped me develop my color pallete choice and managing white space.</p>
            <h3>Non-profit Redesign</h3>
            <p>In this project, we were tasked to remake the website of a local non-profit. I chose Recovery Cafe San Jose, a place for people who need help to go for food, support groups, and advising.</p>
            <Link to="/projects/recoverycafe"><button className='btn'>Recovery Cafe Remake</button></Link>
          </>
          :
          <></>
        }
      </div>
      <div className='project-section'>
        <div className='project-header'>
          <h2>COEN 161: Web Development</h2>
          <button onClick={() => setCoen161Open(!coen161Open)}>{coen161Open ? <ChevronUpIcon height={24} width={24}/> : <ChevronDownIcon height={24} width={24} />}</button>
        </div>
        {coen161Open ? 
        <>
          <p>COEN 161 is an upper div computer science class at Santa Clara University. I learned how to make full web apps using HTML, CSS, and javaScript. This set up my foundations to be able to effectively create react apps. This was taught by Arman Elahi, and is easily my favorite class I have taken at SCU.</p>

          <h3>Wordle Remake</h3>
          <p>This project was the second midterm for the class where we had to remake the logic for wordle by hand on paper. I made this in preperartion for the test and found I was very proud of how it came out.</p>
          <a href="http://dannywalsh.dev/projects/wordle" target='_blank'><button disabled className='btn'>Wordle Remake</button></a>

          <h3>Nick Cagerousel</h3>
          <p>I found this homework to be very fun, I had to make a carousel of Nick Cage gifs.</p>
          <a href="http://nick-cage.dannywalsh.dev" target='_blank'><button disabled className='btn'>Nick Cagerousel</button></a>

          <h3>Who's that Pokemon?</h3>
          <p>Another great homework where we had to fetch a pokemon from an API and then allow the user to guess what pokemon it is.</p>
          <a href="http://whos-that-pokemon.dannywalsh.dev" target='_blank'><button disabled className='btn'>Whos that Pokemon?</button></a>
        </>
          :
      <></>}
      </div>
    </div>
    )
  }
  




  return (
    <div className='projects-wrapper'>
      {content}
    </div>
  )
}

export default Projects
