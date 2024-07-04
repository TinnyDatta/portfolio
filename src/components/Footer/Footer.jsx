
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-blue-50 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a href="#banner" className="link link-hover">About</a>
    <a href="#contact" className="link link-hover">Contact</a>
    <a href="#skills" className="link link-hover">Skills</a>
    <a href="#education" className="link link-hover">Education</a>
  </nav>
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;