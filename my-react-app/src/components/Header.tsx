"use client";

// import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export function Footer() {
 
  return (
    <footer className="bg-gray-900 text-white">
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/icon.png"
                alt="Fronivest"
                width={40}
                height={40} */}
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="font-bold text-xl text-white-900">
                Fronivest
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering cross-border payments across East Africa with secure,
              fast, and affordable money transfer solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@fronivest.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+250 795 414 599</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          
              <div>
                {/* <h3 className="font-semibold text-white mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}

              <div>
                <h3 className="font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Fronivest. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {/* {socialLinks.map((social) => { */}
                const Icon = social.icon;
                return (
                  {/* <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a> */}
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
