// components
import SkillComponent from "@/components/skill.component";

// helpers
import ColumnHelper from "@/helpers/column.helper";

export default function ToolsSection({tools}) {
  return (
    <section id="tools" className='container mt-5'>
      <div className='mb-3'>
        <h1>Tools</h1>
      </div>

      <div className='row g-3 '>
        {tools.map(function (tool, index, array) {
          return (
            <div className={ColumnHelper(4, index, array)} key={Math.random()}>
              <SkillComponent
                image={tool.image}
                title={tool.title}
                description={tool.description}
                learn={tool.learn}
                repositories={tool.repositories}
                website={tool.website}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
