import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ExperianceMain from './components/experianceSections/ExperianceMain'
import HeroMain from './components/heroSection/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import SkillsMain from './components/skillSections/SkillsMain'
import SubSkills from './components/skillSections/SubSkills'


function App() {
 

  return (
    <main className='font-body'>
    <NavbarMain></NavbarMain>
    <HeroMain></HeroMain>
    <AboutMeMain></AboutMeMain>
    <SkillsMain></SkillsMain>
    <SubSkills></SubSkills>
    <ExperianceMain></ExperianceMain>

    
   
    </main>
  )
}

export default App
