import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container relative z-10 flex justify-center p-4">
      Chad Probert &copy; {new Date().getFullYear()}
    </footer>
  );
}
