import ProjectPage from '@/components/ProjectPage'

export default function MobileApp2Page() {
  return (
    <ProjectPage
      title="Giat Bikes Mobile App"
      // description="An in-depth look at your second mobile app. Highlight its unique features, the technology stack used, and how it stands out in the market."
      description='Giat Bikes is a mobile app that allows users to rent bikes in the city. It is built with Flutter, DjangoRest, and Provider. The app is designed to be user-friendly and easy to use. It is a admin app to be used by site managers to manage the bikes and users.'
      type="Mobile App"
      technologies={["Flutter", "APIs", "Provider", "DjangoRest"]}
      screenshots={[
        "/images/giat/giat-yard.jpeg?height=1920&width=1080",
        // "/images/giat/giat-yard.jpeg?height=1920&width=1080",
        "/images/giat/giat-dash.jpeg?height=1920&width=1080",
        "/images/giat/giat-return.jpeg?height=1920&width=1080",
        "/images/giat/giat-confirm-return.jpeg?height=1920&width=1080",
      ]}
    />
  )
}

