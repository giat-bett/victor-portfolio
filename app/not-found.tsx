import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-20" />
      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/placeholder.svg"
              alt="Victor Kipkorir"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}