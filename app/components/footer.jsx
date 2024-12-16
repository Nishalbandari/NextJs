import Image from "next/image";
import Link from "next/link";
import Google from "../../public/google.png";
import apple from "../../public/appstore.png";
import logo from "../../public/logo.png";

const Footer = () => (
  <footer className="bg-blue-100">
    <div className="pb-6 pt-16 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Logo and Description Section */}
        <div className="flex flex-col items-center sm:items-start">
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
          <p className="mt-6 max-w-md text-center leading-relaxed text-zinc-950 sm:max-w-xs sm:text-left">
            Skillety is an AI-driven job portal exclusively for the IT industry.
            Our AI recruiter “Lety” screens and interviews candidates with over
            96% accuracy.
          </p>

          <div className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
            {["facebook", "instagram", "twitter", "linkedin"].map(
              (platform) => (
                <Link
                  key={platform}
                  href={`https://${platform}.com`}
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">{platform}</span>
                  <i className={`fab fa-${platform} text-2xl`} />
                </Link>
              )
            )}
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="mt-4 space-y-2">
            {["Company", "Careers", "Blog", "Contact"].map((link) => (
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

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold">Help</h3>
          <ul className="mt-4 space-y-2">
            {["FAQ", "Support", "Privacy Policy", "Terms of Service"].map(
              (link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-teal-700 hover:text-teal-500"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Download Our App Section */}
        <div>
          <h3 className="text-lg font-semibold">Download Our App</h3>
          <div className="flex gap-4 mt-6">
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

      {/* Newsletter Signup */}
      <div className="mt-12 sm:flex sm:justify-center">
        <div className="max-w-md sm:max-w-none sm:w-full sm:flex sm:justify-between">
          <input
            variant="outlined"
            label="Your Email"
            className="w-full sm:w-3/5"
            size="small"
            type="email"
          />
          <button
            variant="contained"
            color="primary"
            className="mt-4 sm:mt-0 sm:ml-4"
            size="small"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div className="bg-blue-200 py-4 text-center">
      <p className="text-sm text-zinc-700">
        © 2024 Skillety, All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
