// components
import SkillComponent from "@/components/skill.component";

// helpers
import ColumnHelper from "@/helpers/column.helper";

export default function LanguagesSection({ languages }) {
  return (
    <section id='languages' className='container mt-5'>
      <div className='mb-3'>
        <h1>Languages</h1>
      </div>

      <div className='row g-3'>
        {languages.map(function (language, index, array) {
          return (
            <div className={ColumnHelper(6, index, array)} key={Math.random()}>
              <SkillComponent
                image={language.image}
                title={language.title}
                description={language.description}
                learn={language.learn}
                repositories={language.repositories}
                website={language.website}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
