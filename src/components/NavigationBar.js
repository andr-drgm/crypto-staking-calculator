const links = [
  { href: '#calculator', label: 'Calculator' },
  { href: '#guide', label: 'Guide' },
  { href: '#arcade', label: 'Arcade' },
  { href: '#faq', label: 'FAQ' },
  { href: '#support', label: 'Support' },
];

export default function NavigationBar() {
  return (
    <header className="nav-shell">
      <div className="nav-bar">
        <a className="brand-lockup" href="#top">
          <span className="brand-logo-frame" aria-hidden="true">
            <img
              className="brand-logo"
              src={`${process.env.PUBLIC_URL}/icons8-coins-96.png`}
              alt=""
            />
          </span>
          <span className="brand-copy">
            <strong>Crypto Staking Calculator</strong>
            <span>Retro reward planner for HODLers</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
