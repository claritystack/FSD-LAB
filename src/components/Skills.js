function Skills({ skills }) {
  return (
    <section>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <span key={index}>{skill} </span>
      ))}
    </section>
  );
}

export default Skills;