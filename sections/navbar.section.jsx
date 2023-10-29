export default function NavbarSection() {
  return (
    <section className='container'>
      <nav className='navbar navbar-expand-lg bg-body-secondary rounded-bottom border-start border-bottom border-end'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#languages'>
                  Languages
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#frameworks'>
                  Frameworks
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#databases'>
                  Databases
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#tools'>
                  Tools
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contactus'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
