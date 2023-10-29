"use client";

// packages
import react from "react";

export default function SocialButtonComponent({
  type,
  icon,
  name,
  href,
  animation,
}) {
  const [show, setShow] = react.useState(false);

  if (show && animation) {
    return (
      <a
        onMouseLeave={() => setShow(false)}
        href={href}
        target='_blank'
        className='btn btn-sm btn-primary'
      >
        <i className={`fa-${type} fa-${icon}`} /> {name}
      </a>
    );
  }

  return (
    <a
      onMouseEnter={() => setShow(true)}
      href={href}
      target='_blank'
      className='btn btn-sm btn-primary'
    >
      <i className={`fa-${type} fa-${icon}`} />
    </a>
  );
}
