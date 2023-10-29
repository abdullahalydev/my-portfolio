export default function FooterSection() {
  return (
    <section className='container mt-5'>
      <div className='bg-body-tertiary border-top border-start border-end rounded-top p-3 text-center'>
        <span>
          Made with <i className='fa-solid fa-heart fa-beat text-danger mx-1' />{" "}
          By{" "}
          <a className='text-body text-decoration-none' href='#aboutme'>
            Abdullah Aly
          </a>
        </span>
      </div>
    </section>
  );
}
