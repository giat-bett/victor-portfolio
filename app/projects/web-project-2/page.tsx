import ProjectPage from '@/components/ProjectPage'

export default function WebProject2Page() {
  return (
    <ProjectPage
      title="Geecko Holdings Limited"
      // description="An extensive description of your second web project. Discuss its purpose, the problem it solves, and how you leveraged different technologies to create an efficient solution."
      description='Geecko Holdings Limited is a company that provides a wide range of services including web development, mobile app development, and digital marketing. The website was built using Django, a high-level Python web framework, and PostgreSQL, a powerful open-source object-relational database system. The website features a clean and modern design, with a responsive layout that adapts to different screen sizes. The website includes a home page, projects page, team page, contact page., etcetera.'
      type="Web App"
      technologies={["HTML", "Django", "Bootstrap", "CSS", "PostgreSQL"]}
      screenshots={[
        "/images/geecko/home.png?height=1080&width=1920",
        "/images/geecko/projects.png?height=1080&width=1920",
        "/images/geecko/team.png?height=1080&width=1920",
        "/images/geecko/contact.png?height=1080&width=1920"
      ]}
      link="https://geeckoltd.com/"     
    />
  )
}