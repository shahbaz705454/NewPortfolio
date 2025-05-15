import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import ExperianceMain from './components/experianceSections/ExperianceMain'
import FooterMain from './components/footer/FooterMain'
import HeroMain from './components/heroSection/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectMain from './components/projectSection/ProjectMain'
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
    <ProjectMain></ProjectMain>
    <ContactMeMain></ContactMeMain>
    <FooterMain></FooterMain>

    
   
    </main>
  )
}

export default App
