// components
import SkillComponent from "@/components/skill.component";

// helpers
import ColumnHelper from "@/helpers/column.helper";

export default function DatabasesSection({databases}) {
  return (
    <section id="databases" className='container mt-5'>
      <div className='mb-3'>
        <h1>Databases</h1>
      </div>

      <div className='row g-3'>
        {databases.map(function (database, index, array) {
          return (
            <div className={ColumnHelper(4, index, array)} key={Math.random()}>
              <SkillComponent
                image={database.image}
                title={database.title}
                description={database.description}
                learn={database.learn}
                repositories={database.repositories}
                website={database.website}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
