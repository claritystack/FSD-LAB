function Education({ data }) {
  return (
    <section>
      <h2>Education</h2>
      {data.map((edu, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <h3>{edu.degree}</h3>
          <p>{edu.institute}</p>
          <p>{edu.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;