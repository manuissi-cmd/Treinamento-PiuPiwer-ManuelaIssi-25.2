export default function ProfilePage() {
  return (
    <div style={{ padding: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ 
          width: "100px", 
          height: "100px", 
          borderRadius: "50%", 
          background: "#ddd",
          margin: "auto"
        }} />

        <h2>@manuela</h2>
        <p>Bio do usuário aqui</p>
      </div>

      <div style={{ marginTop: "24px" }}>
        <p><strong>Piupius:</strong> 42</p>
        <p><strong>Seguindo:</strong> 100</p>
        <p><strong>Seguidores:</strong> 250</p>
      </div>
    </div>
  );
}
