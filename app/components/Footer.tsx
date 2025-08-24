import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container relative z-10 flex justify-center p-4 text-lg font-normal tracking-wide">
      Chad Probert &copy; {new Date().getFullYear()}
    </footer>
  );
}
