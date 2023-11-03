import {useState} from 'react'
import { useOutlet } from 'react-router-dom'
import '../styles/projects.css'

const Projects = () => {

  const [wordleOpen, setWordleOpen] = useState(false)

  const outlet = useOutlet()

  let content

  if(wordleOpen){
    content = outlet
  }else{
    content = (
    <div>
      <h1>Projects</h1>
      <h2>COEN 161: Web Development</h2>
      <p>COEN 161 is an upper div computer science class at Santa Clara University. I learned how to make full web apps using HTML, CSS, and javaScript. This set up my foundations to be able to effectively create react apps. This was taught by Arman Elahi, and is easily my favorite class I have taken at SCU.</p>

      <h3>Wordle Remake</h3>
      <p>This project was the second midterm for the class where we had to remake the logic for wordle by hand on paper. I made this in preperartion for the test and found I was very proud of how it came out.</p>
      <a href="http://wordle.dannywalsh.dev" target='_blank'><button className='btn'>Wordle Remake</button></a>

      <h3>Nick Cagerousel</h3>
      <p>I found this homework to be very fun, I had to make a carousel of Nick Cage gifs.</p>
      <a href="http://nick-cage.dannywalsh.dev" target='_blank'><button className='btn'>Nick Cagerousel</button></a>

      <h3>Who's that Pokemon?</h3>
      <p>Another great homework where we had to fetch a pokemon from an API and then allow the user to guess what pokemon it is.</p>
      <a href="http://whos-that-pokemon.dannywalsh.dev" target='_blank'><button className='btn'>Whos that Pokemon?</button></a>
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
