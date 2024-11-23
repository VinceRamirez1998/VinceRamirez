// components/Skills.tsx
'use client';  // Mark this as a client-side component

const Skills = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc pl-5 space-y-2">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2">
            <li>HTML5 & CSS3</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>GraphQL</li>
            <li>Figma</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Skills;
  