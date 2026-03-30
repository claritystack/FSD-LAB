function Projects({ data }) {
  return (
    <section>
      <h2>Projects</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {data.map((proj, index) => (
          <div
            key={index}
            style={{
              background: "#334155",
              padding: "15px",
              borderRadius: "8px",
              width: "200px"
            }}
          >
            {proj}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;