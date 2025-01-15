import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Let&apos;s <span className="gold-gradient">talk</span>
            </h3>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-muted-foreground">+254 745 663 745</p>
            <p className="text-muted-foreground">victor@giatbikes.co.ke</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Address</h4>
            <p className="text-muted-foreground">Chebarus Mobility Center</p>
            <p className="text-muted-foreground">Baraka Center, Room 2</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-muted mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Victor Kipkorir. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

