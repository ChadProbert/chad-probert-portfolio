export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-border bg-card py-4 text-center text-xs font-medium text-muted-foreground shadow-sm sm:text-sm">
      <span>
        Copyright &copy; {currentYear} Chad Probert. All rights reserved.
      </span>
    </footer>
  );
};
