export default function LoginPage() {
  return (
    <div style={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      gap: "12px"
    }}>
      <h1>Entrar</h1>

      <input 
        type="email" 
        placeholder="E-mail" 
        style={{ padding: "8px", width: "240px" }} 
      />

      <input 
        type="password" 
        placeholder="Senha" 
        style={{ padding: "8px", width: "240px" }} 
      />

      <button style={{ padding: "10px 20px" }}>
        Login
      </button>

      <a href="/register" style={{ color: "blue" }}>
        Criar conta
      </a>
    </div>
  );
}
