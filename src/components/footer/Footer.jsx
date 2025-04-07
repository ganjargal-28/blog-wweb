import { Paragraph } from "../headers/Paragraph";
import { Meta } from "../svgss/Meta";
import { Footerparagraph } from "./Footerparagraph";

export const Footer = () => {
  return (
    <div className="w-full bg-[#F6F6F7]">
      <div className="container mt-5 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
          {/* About Section */}
          <div className="w-full md:w-[289px] flex flex-col gap-3 mb-4 md:mb-0">
            <p className="font-semibold text-lg">About</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p>Email: info@jstemplate.net</p>
            <p>Phone: 880 123 456 789</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3 md:gap-5">
            <a
              href="./"
              className="text-[#6D6E76] hover:text-black transition-colors"
            >
              Home
            </a>
            <a
              href="./blog-list"
              className="text-[#6D6E76] hover:text-black transition-colors"
            >
              Blog
            </a>
            <a
              href="contact-us"
              className="text-[#6D6E76] hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons Section */}
          <div className="flex gap-4 justify-start md:justify-end items-center mt-4 md:mt-0">
            {/* Facebook Icon */}
            <a href="https://facebook.com" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                className="cursor-pointer"
              >
                <path
                  d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                  fill="#6D6E76"
                />
              </svg>
            </a>

            {/* Twitter Icon */}
            <a href="https://twitter.com" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                fill="none"
                className="cursor-pointer"
              >
                <path
                  d="M5.69945 14.5C11.7357 14.5 15.0382 9.4978 15.0382 5.16124C15.0382 5.02062 15.0351 4.87687 15.0288 4.73624C15.6713 4.27164 16.2257 3.69617 16.666 3.03687C16.0677 3.30307 15.4324 3.47692 14.782 3.55249C15.4669 3.14194 15.9797 2.49698 16.2254 1.73718C15.5811 2.11904 14.8764 2.38841 14.1416 2.53374C13.6466 2.00771 12.992 1.65941 12.2791 1.5427C11.5663 1.42599 10.8348 1.54737 10.1978 1.88806C9.56088 2.22876 9.05388 2.7698 8.75525 3.42754C8.45661 4.08528 8.38297 4.82308 8.5457 5.52687C7.24101 5.46139 5.96464 5.12247 4.79934 4.53207C3.63403 3.94166 2.60581 3.11296 1.78133 2.09968C1.36228 2.82216 1.23405 3.6771 1.4227 4.49073C1.61135 5.30436 2.10272 6.01563 2.79695 6.47999C2.27577 6.46344 1.766 6.32312 1.30977 6.07062V6.11124C1.3093 6.86943 1.57141 7.60439 2.05156 8.19118C2.5317 8.77797 3.20023 9.18037 3.94352 9.32999C3.46072 9.46209 2.954 9.48133 2.46258 9.38624C2.67232 10.0383 3.0804 10.6086 3.62986 11.0176C4.17933 11.4265 4.84276 11.6537 5.52758 11.6675C4.36497 12.5807 2.9288 13.0761 1.45039 13.0737C1.18821 13.0733 0.926282 13.0573 0.666016 13.0256C2.16792 13.9892 3.91504 14.5009 5.69945 14.5Z"
                  fill="#6D6E76"
                />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a href="https://instagram.com" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                fill="none"
                className="cursor-pointer"
              >
                <path
                  d="M8.33399 1.44062C10.4715 1.44062 10.7246 1.45 11.5652 1.4875C12.3465 1.52187 12.7684 1.65313 13.0496 1.7625C13.4215 1.90625 13.6902 2.08125 13.9684 2.35938C14.2496 2.64062 14.4215 2.90625 14.5652 3.27813C14.6746 3.55938 14.8059 3.98438 14.8402 4.7625C14.8777 5.60625 14.8871 5.85938 14.8871 7.99375C14.8871 10.1313 14.8777 10.3844 14.8402 11.225C14.8059 12.0063 14.6746 12.4281 14.5652 12.7094C14.4215 13.0813 14.2465 13.35 13.9684 13.6281C13.6871 13.9094 13.4215 14.0813 13.0496 14.225C12.7684 14.3344 12.3434 14.4656 11.5652 14.5C10.7215 14.5375 10.4684 14.5469 8.33399 14.5469C6.19649 14.5469 5.94336 14.5375 5.10274 14.5C4.32148 14.4656 3.89961 14.3344 3.61836 14.225C3.89961 1.65313 4.32461 1.52187 5.10274 1.4875C5.94336 1.45 6.19649 1.44062 8.33399 1.44062ZM8.33399 0C6.16211 0 5.89023 0.009375 5.03711 0.046875C3.535 0.1125 2.63611 0.353125 1.92273 0.759375C1.20936 1.15938 0.88386 1.49688 0.54961 1.89062C0.23872 2.2725 0.0530605 2.5625 0.00257447 2.87656C-0.0493306 3.2325 0.00257447 3.47438 0.0216492 3.72313C0.0530605 4.0375 0.23174 4.35313 0.55027 4.68437C0.88386 5.06562 1.20936 5.40213 1.92273 5.80213C2.63611 6.20833 3.535 6.45938 5.03711 6.525L8.33399 6.525L8.33399 0Z"
                  fill="#6D6E76"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="border-t pt-4 text-center text-sm text-[#6D6E76]">
          <p>&copy; 2025 All Rights Reserved | Company Name</p>
        </div>
      </div>
    </div>
  );
};
