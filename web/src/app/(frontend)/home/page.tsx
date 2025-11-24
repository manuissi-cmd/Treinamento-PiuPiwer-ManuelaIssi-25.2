export default function HomePage() {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Home</h1>

      <textarea 
        placeholder="Escreva um piu..."
        style={{ width: "100%", height: "80px", marginTop: "12px" }}
      />

      <button style={{ marginTop: "8px", padding: "8px 16px" }}>
        Publicar
      </button>

      <div style={{ marginTop: "24px" }}>
        <div style={{ padding: "12px", border: "1px solid #ccc", marginBottom: "12px" }}>
          <strong>@usuario</strong>
          <p>Meu primeiro piu!</p>
        </div>

        <div style={{ padding: "12px", border: "1px solid #ccc" }}>
          <strong>@manuela</strong>
          <p>Piu de exemplo!</p>
        </div>
      </div>
    </div>
  );
}
