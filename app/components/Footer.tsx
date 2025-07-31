import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container relative z-10 flex justify-center p-4">
      Chad Probert &copy; {new Date().getFullYear()}
    </footer>
  );
}
