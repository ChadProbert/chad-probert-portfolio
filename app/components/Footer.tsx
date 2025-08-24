import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container hidden md:flex relative z-10 justify-center p-4 text-lg font-normal tracking-wide">
      Chad Probert &copy; {new Date().getFullYear()}
    </footer>
  );
}
