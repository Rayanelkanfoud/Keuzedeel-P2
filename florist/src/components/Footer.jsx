
function Footer({ socials }) {
  return (
    <footer className="footer container">
      <div className="row g-4">
        {socials.map((social) => (
          <div className="col-6 col-md-3" key={social}>
            {social}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
