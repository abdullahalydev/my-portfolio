// components
import SocialButtonComponent from "./buttons/social.button.component";

export default function SocialComponent({animation}) {
  return (
    <>
      <SocialButtonComponent
        type={"brands"}
        icon={"github"}
        name={"Github"}
        animation={!!animation}
        href={""}
      />
      <SocialButtonComponent
        type={"brands"}
        icon={"twitter"}
        name={"Twitter"}
        animation={!!animation}
        href={""}
      />
      <SocialButtonComponent
        type={"brands"}
        icon={"linkedin"}
        name={"LinkedIn"}
        animation={!!animation}
        href={""}
      />
      <SocialButtonComponent
        type={"brands"}
        icon={"npm"}
        name={"Npm"}
        animation={!!animation}
        href={""}
      />
      <SocialButtonComponent
        type={"solid"}
        icon={"envelope"}
        name={"abdullahaly.dev@gmail.com"}
        animation={!!animation}
        href='mailto:abdullahaly.dev@gmail.com'
      />
    </>
  );
}
