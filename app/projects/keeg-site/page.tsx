import ProjectPage from '@/components/ProjectPage'

export default function WebProject1Page() {
  return (
    <ProjectPage
      title="Kiptenden Education Empowerment Group"
      // description="A detailed overview of your first web project. Explain the project's goals, the technologies used, and any interesting challenges you faced during development."
      description='KEEG is a community-based organization dedicated to enhancing education uptake within the community by empowering school-going students to stay focused on their studies. I helped design and code out this website based on NextJS. It has dynamic and responsive content. The website will go a long way to help them get online visibility as they will peg it to their social media sites. It is a place for people to learn more about their empowerment efforts and future plans.'
      type="Web App"
      technologies={["NextJs", "ReactDOM", "MongoDB", "JavaScript"]}
      screenshots={[
        "/images/keeg/home.png?height=1080&width=1920",
        "/images/keeg/footer.png?height=1080&width=1920",
        "/images/keeg/photo-gallery.png?height=1080&width=1920",
        "/images/keeg/success-stories.png?height=1080&width=1920"
      ]}
      link="https://kiptenden-education-empowerment.vercel.app/"
    />
  )
}