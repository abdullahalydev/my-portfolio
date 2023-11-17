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
        href={"https://github.com/abdullahalydev"}
      />
      <SocialButtonComponent
        type={"brands"}
        icon={"twitter"}
        name={"Twitter"}
        animation={!!animation}
        href={"https://twitter.com/abdullahalydev"}
      />
      <SocialButtonComponent
        type={"brands"}
        icon={"linkedin"}
        name={"LinkedIn"}
        animation={!!animation}
        href={"https://www.linkedin.com/in/abdullah-aly-30854827b/"}
      />
      <SocialButtonComponent
        type={"brands"}
        icon={"npm"}
        name={"Npm"}
        animation={!!animation}
        href={"https://www.npmjs.com/settings/0bo_dy/profile"}
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
