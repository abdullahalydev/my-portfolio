// components
import SkillComponent from "@/components/skill.component";

// helpers
import ColumnHelper from "@/helpers/column.helper";

export default function FrameworksSection({ frameworks }) {
  return (
    <section id='frameworks' className='container mt-5'>
      <div className='mb-3'>
        <h1>Frameworks</h1>
      </div>

      <div className='row g-3'>
        {frameworks.map(function (framework, index, array) {
          return (
            <div className={ColumnHelper(6, index, array)} key={Math.random()}>
              <SkillComponent
                image={framework.image}
                title={framework.title}
                description={framework.description}
                learn={framework.learn}
                repositories={framework.repositories}
                website={framework.website}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
