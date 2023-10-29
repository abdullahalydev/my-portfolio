// components
import SocialComponent from "./social.component";

export default function AboutMeComponent() {
  return (
    <section id='aboutme' className='container my-3'>
      <div className='bg-body-secondary rounded p-3'>
        <div className='row g-3'>
          <div className='col-12 col-md-4 col-lg-3'>
            <div>
              <img
                className='rounded'
                src='https://cdn.discordapp.com/attachments/1165760283319476274/1167624148042911744/Twitter_Logo.png?ex=654ecdba&is=653c58ba&hm=ee4be83c594862784131cf2f2d17caad28a5f335dd0e7985795ca66da5e24f3a&'
                alt=''
                style={{
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className='col-12 col-md-8 col-lg-9'>
            <div className='d-flex flex-column h-100'>
              <div className=''>
                <div className='mb-2'>
                  <h1 className='mb-0'>Abdullah Aly</h1>
                  <span>Back-end Developer</span>
                </div>
                <p>
                  Hello, my name is Abdullah. Born in 2007, I was born in Egypt.
                  I'm a Backend developer currently based in Giza. I aspire to
                  work in a large company. I started learning programming in
                  2019. I started learning JavaScript from engineer Osama
                  Al-Zero. I learned and mastered JavaScript until I discovered
                  Node.js and now I am a backend programmer.
                </p>
              </div>

              <div className='mt-auto d-flex gap-1'>
                <SocialComponent animation={true} />
                {/* <button className='btn btn-sm btn-primary'>
                  <i className='fa-brands fa-github'></i> Github
                </button>
                <button className='btn btn-sm btn-primary'>
                  <i className='fa-brands fa-twitter'></i> Twitter
                </button>
                <button className='btn btn-sm btn-primary'>
                  <i className='fa-brands fa-linkedin'></i> LinkedIn
                </button>
                <button className='btn btn-sm btn-primary'>
                  <i className='fa-brands fa-npm'></i> Npm
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
