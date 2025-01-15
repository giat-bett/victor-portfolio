import ProjectPage from '@/components/ProjectPage'

export default function WebProject1Page() {
  return (
    <ProjectPage
      title="Embed Solutions Landing Page"
      // description="A detailed overview of your first web project. Explain the project's goals, the technologies used, and any interesting challenges you faced during development."
      description='A landing page for Embed Solutions a company established in 2019. The company provides services in the field of embedded systems, IoT, and automation. The landing page is designed to showcase the company’s services and projects. It also serves as an access point for clients to get in touch with the company.'
      type="Web App"
      technologies={["NextJs", "ReactDOM", "MongoDB", "JavaScript"]}
      screenshots={[
        "/images/embed/contact-1.png?height=1080&width=1920",
        "/images/embed/contact.png?height=1080&width=1920",
        "/images/embed/services.png?height=1080&width=1920",
        "/images/embed/footer.png?height=1080&width=1920"
      ]}
      link="https://embed-landing.vercel.app/"
    />
  )
}