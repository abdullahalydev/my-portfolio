// components
import SocialComponent from "@/components/social.component";

export default function ContactUsComponent() {
  return (
    <section id='contactus' className='container mt-5'>
      <div
        className='rounded d-flex flex-column justify-content-center'
        style={{
          backgroundColor: "#000",
          height: "284px",
        }}
      >
        <div className='d-flex flex-column gap-2'>
          <h1 className='text-center text-primary'>Hey, Need Help?</h1>
          <div className='d-flex gap-1 justify-content-center'>
            <SocialComponent animation={true}/>
          </div>
        </div>
      </div>
    </section>
  );
}
