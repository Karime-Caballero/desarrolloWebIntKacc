import Navbar from "./NarBar";

function App() {
  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <img
          src="https://es.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_lifting_state.png&w=1920&q=75"
          alt="React Logo"
          style={styles.image}
        />
        <h2 style={styles.title}>Bienvenido a mi página Web Desarrollo web INtegral </h2>
        <hr style={styles.separator} />
        <p style={styles.paragraph}>
          Esta simple aplicación está creada con React.
        </p>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    margin: "2rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "200px", // Puedes aumentar o disminuir este valor
    marginBottom: "1.5rem",
  },
  title: {
    color: "#2c3e50",
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  separator: {
    width: "60%",
    margin: "1rem auto",
    borderColor: "#3498db",
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "#555",
  },
};

export default App;
