// packages
import Image from "next/image";

// components
import SocialComponent from "./social.component";

export default function AboutMeComponent() {
  return (
    <section id='aboutme' className='container my-3'>
      <div className='bg-body-secondary rounded p-3'>
        <div className='row g-3'>
          <div className='col-12 col-md-4 col-lg-3'>
            <Image
              className='rounded'
              src='/profile.png'
              width='800'
              height='800'
              title="Abdullah's Logo"
              alt="Abdullah's Logo"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
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
                  I{"'"}m a Backend developer currently based in Giza. I aspire
                  to work in a large company. I started learning programming in
                  2019. I started learning JavaScript from engineer Osama
                  Al-Zero. I learned and mastered JavaScript until I discovered
                  Node.js and now I am a backend programmer.
                </p>
              </div>

              <div className='mt-auto d-flex gap-1'>
                <SocialComponent animation={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
