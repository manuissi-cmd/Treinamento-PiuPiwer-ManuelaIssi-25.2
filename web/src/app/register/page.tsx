export default function RegisterPage() {
  return (
    <div style={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      gap: "12px"
    }}>
      <h1>Criar Conta</h1>

      <input type="text" placeholder="Nome" style={{ padding: "8px", width: "240px" }} />
      <input type="email" placeholder="E-mail" style={{ padding: "8px", width: "240px" }} />
      <input type="password" placeholder="Senha" style={{ padding: "8px", width: "240px" }} />

      <button style={{ padding: "10px 20px" }}>
        Registrar
      </button>

      <a href="/login" style={{ color: "blue" }}>
        Já tenho conta
      </a>
    </div>
  );
}
