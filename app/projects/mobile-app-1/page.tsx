import ProjectPage from '@/components/ProjectPage'

export default function MobileApp1Page() {
  return (
    <ProjectPage
      title="ContraAid Mobile App"
      // description="A comprehensive description of your first mobile app. Discuss the problem it solves, its main features, and any challenges you overcame during development."
      description="A mobile app that helps people seeking contraceptive assistance. It utilizes Flutter, Firebase, and LLMs to provide a seamless experience for users. It also has a user-friendly interface that makes it easy for users to navigate through the app. The app is designed to help users find the right contraceptive method for them, and it provides information on different contraceptive methods available. It also has an fine tuned AI LLM service that can answer questions and provide guidance to users."
      type="Mobile App"
      technologies={["Flutter", "Firebase", "LLMs", "AI", "API"]}
      screenshots={[
        "/images/contraaid-home.jpeg?height=1920&width=1080",
        "/images/contra-chat.jpeg?height=1920&width=1080",
        "/images/contra-video-learn.jpeg?height=1920&width=1080",
        "/images/contra-profile-screen.jpeg?height=1920&width=1080",
      ]}
    />
  )
}