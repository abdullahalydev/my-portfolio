// packages
import Image from "next/image";

// helpers
import ExpreniceHelper from "@/helpers/exprenice.helper";

export default function SkillComponent({
  image,
  title,
  description,
  learn,
  website,
  repositories,
}) {
  return (
    <div className='d-flex flex-column bg-body-secondary p-3 rounded h-100'>
      <div className='mb-3'>
        <div className='p-3 rounded d-inline-block bg-primary'>
          <Image
            src={image}
            style={{
              aspectRatio: "1/1",
            }}
            width='34'
            height='34'
            title={`${title}'s Logo`}
            alt={`${title}'s Logo`}
          />
        </div>
      </div>

      <div className='bg-body rounded p-3 mb-2 h-100'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className='d-flex mt-auto'>
        <div className='my-auto'>
          <span className='badge text-bg-primary'>
            {ExpreniceHelper(learn)}
          </span>
        </div>

        <div className='ms-auto d-flex gap-1'>
          {website && (
            <a
              href={website}
              target='_blank'
              className='btn btn-sm btn-primary rounded'
            >
              Website
            </a>
          )}
          {repositories && (
            <a
              href={repositories}
              target='_blank'
              className='btn btn-sm btn-primary rounded'
            >
              Repositories
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
