import Image from "next/image";
import Link from "next/link";
import Google from "../../public/google.png";
import apple from "../../public/appstore.png";
import logo from "../../public/logo.png";
import footer from "../../public/footer-img.png";

const Footer = () => (
  <footer className="bg-blue-100 px-3">
    <div className="m-5">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Skillety</span>
        <Image
          className="h-11 w-auto"
          src={logo}
          alt="Logo"
          width={200}
          height={50}
        />
      </Link>
    </div>
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
      <div className="grid grid-cols-2 md:grid-cols-1">
        <div>
          <p className="mt-6 max-w-md text-center text-ellipsis leading-relaxed text-zinc-950 sm:max-w-xs sm:text-left">
            Skillety is an AI-driven job portal exclusively for the IT industry.
            Our AI recruiter “Lety” screens and interviews candidates with over
            96% accuracy.
          </p>
          <p className="mt-5 text-nowrap">
            Help Line:<span className="font-bold ms-5">+91-996-643-3330</span>
          </p>
          <p className="mt-1">
            Email:<span className="font-bold ms-12">info@skillety.com</span>
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 transition hover:text-teal-700/75 w-2"
          >
            <span className="sr-only">Facebook</span>
            <svg
              className="w-5 h-8 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.3h3.128V8.414c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.462.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763V11.3h3.588l-.467 3.406h-3.121V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 transition hover:text-teal-700/75 w-2"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="w-6 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.76 3.76 0 0 0 4 7.75v8.5A3.76 3.76 0 0 0 7.75 20h8.5A3.76 3.76 0 0 0 20 16.25v-8.5A3.76 3.76 0 0 0 16.25 4h-8.5ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 transition hover:text-teal-700/75 w-2"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-6 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.633 7.997c.014.197.014.395.014.592 0 6.032-4.586 12.978-12.978 12.978a12.91 12.91 0 0 1-6.994-2.048c.395.047.774.061 1.183.061a9.168 9.168 0 0 0 5.683-1.958 4.587 4.587 0 0 1-4.28-3.174c.28.047.56.08.853.08.411 0 .823-.054 1.209-.16a4.579 4.579 0 0 1-3.675-4.49v-.056c.62.345 1.335.555 2.095.578A4.573 4.573 0 0 1 3.088 6.75c0-.852.228-1.647.628-2.33a13.014 13.014 0 0 0 9.433 4.785 5.169 5.169 0 0 1-.114-1.046 4.575 4.575 0 0 1 7.91-3.126 9.152 9.152 0 0 0 2.903-1.107 4.536 4.536 0 0 1-2.013 2.523 9.142 9.142 0 0 0 2.632-.711 9.78 9.78 0 0 1-2.29 2.37Z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 transition hover:text-teal-700/75 w-2"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-6 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.452 20.452h-3.554v-5.568c0-1.328-.027-3.036-1.848-3.036-1.85 0-2.134 1.443-2.134 2.934v5.67h-3.554V9h3.414v1.561h.048c.476-.9 1.637-1.849 3.368-1.849 3.6 0 4.267 2.369 4.267 5.448v6.292ZM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13ZM7.114 20.452H3.56V9h3.554v11.452Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-row item-center mx-4 sm:flex-row gap-6 sm:justify-center items-start">
        <div>
          <ul className="mt-4 space-y-2">
            {["About Us", "Contact", "Pricing", "Blog"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-teal-700 hover:text-teal-500"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="mt-4 space-y-2">
            {[
              "Browse Jobs",
              "Browse Employers",
              "Post a Job",
              "Search CVs",
            ].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-teal-700 hover:text-teal-500"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="mt-4 space-y-2">
            {[
              "Privacy Policy",
              "Terms && Conditions",
              "FAQ",
              "Chat With Lety",
            ].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-teal-700 hover:text-teal-500"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Image
          className="h-11 w-auto"
          src={footer}
          alt="Footer"
          width={150}
          height={50}
        />
      </div>

      <div>
        <div>
          <h3 className="text-lg font-medium">Subscribe to our Newsletter</h3>
          <div className="flex m-3">
            <input
              className="w-full sm:w-3/5"
              type="email"
              placeholder="Your Email"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition duration-300">
              Submit
            </button>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="font-semibold text-2xl mt-6">Apply on the go</h2>
          <p className="font-medium mt-3">
            Get Real-time job updates on our App
          </p>
          <div className=" flex gap-4 mt-3">
            <Link href="https://play.google.com/store/apps" target="_blank">
              <Image
                src={Google}
                alt="Google Play Store"
                width={130}
                height={40}
              />
            </Link>
            <Link href="https://apps.apple.com/us/app" target="_blank">
              <Image
                src={apple}
                alt="Apple App Store"
                width={130}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-blue-100 py-4 text-center">
      <p className="text-sm text-zinc-700">
        © 2024 Skillety, All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
