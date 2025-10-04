import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { Card } from '../../components/Card';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Credenciais válidas para demonstração
    const validCredentials = [
      { email: 'admin@cirandadosaber.com', password: 'admin123' },
      { email: 'diretor@escola.com', password: 'diretor2025' },
      { email: 'demo@teste.com', password: 'demo123' }
    ];
    
    // Simular verificação de API
    setTimeout(() => {
      const isValid = validCredentials.some(
        cred => cred.email === email && cred.password === password
      );
      
      if (isValid) {
        // Salvar no localStorage para "lembrar" do login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        setIsLoading(false);
        navigate('/dashboard');
      } else {
        setIsLoading(false);
        alert('❌ Credenciais inválidas!\n\nTente:\n📧 admin@cirandadosaber.com\n🔑 admin123');
      }
    }, 2000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Card className="login-card">
          <div className="login-header">
            <Logo size="large" />
            <h1>Sistema de Gestão Escolar</h1>
            <p>Faça login para acessar o sistema</p>
          </div>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@cirandadosaber.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="large"
              loading={isLoading}
              className="login-button"
            >
              {isLoading ? 'Entrando...' : 'Entrar no Sistema'}
            </Button>
          </form>
          
          <div className="login-footer">
            <p>
              <strong>💡 Credenciais para teste:</strong><br/>
              📧 admin@cirandadosaber.com<br/>
              🔑 admin123
            </p>
            <p>Esqueceu sua senha? <a href="#reset">Clique aqui</a></p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;