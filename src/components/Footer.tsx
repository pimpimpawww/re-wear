const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground font-body">
          © 2026 Najwa Aulia. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["LinkedIn", "Instagram", "Email"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
