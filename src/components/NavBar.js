function NavBar() {
  const links = ["home", "about", "projects"];
  const navLink = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>
    {/* display an <a> tag for each link here */}
    {navLink}
    </nav>;
}

export default NavBar;