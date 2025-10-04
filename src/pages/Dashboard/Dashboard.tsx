import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showRevenue, setShowRevenue] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <Logo size="medium" />
          <h1>Sistema de Gestão - Ciranda do Saber</h1>
          <Button 
            variant="outline" 
            size="small"
            onClick={handleLogout}
          >
            Sair
          </Button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-container">
          <h2>Dashboard Principal</h2>
          
          <div className="metrics-grid">
            <Card className="metric-card">
              <div className="metric-content">
                <div className="metric-icon">👥</div>
                <h3>Total de Estudantes</h3>
                <div className="metric-value">145</div>
                <p className="metric-description">Ativos no sistema</p>
                <div className="metric-trend positive">+12 este mês</div>
              </div>
            </Card>

            <Card className="metric-card">
              <div className="metric-content">
                <div className="metric-icon">💰</div>
                <h3>Mensalidades em Dia</h3>
                <div className="metric-value">89%</div>
                <p className="metric-description">129 de 145 estudantes</p>
                <div className="metric-trend positive">+5% vs mês anterior</div>
              </div>
            </Card>

            <Card className="metric-card">
              <div className="metric-content">
                <div className="metric-icon">📊</div>
                <h3>Receita Mensal</h3>
                <div className="metric-value">
                  {showRevenue ? 'R$ 52.800' : '•••••••'}
                </div>
                <p className="metric-description">Outubro 2025</p>
                <div className="metric-trend positive">+15% crescimento</div>
                <button 
                  className="toggle-revenue"
                  onClick={() => setShowRevenue(!showRevenue)}
                  title={showRevenue ? 'Ocultar valor' : 'Mostrar valor'}
                >
                  {showRevenue ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </Card>

            <Card className="metric-card">
              <div className="metric-content">
                <div className="metric-icon">🎓</div>
                <h3>Turmas Ativas</h3>
                <div className="metric-value">12</div>
                <p className="metric-description">Diferentes níveis</p>
                <div className="metric-trend neutral">Estável</div>
              </div>
            </Card>
          </div>

          <div className="actions-grid">
            <Card className="action-card">
              <h3>Gestão de Estudantes</h3>
              <p>Adicionar, editar e gerenciar informações dos estudantes</p>
              <Link to="/students">
                <Button variant="primary" size="medium">
                  Gerenciar Estudantes
                </Button>
              </Link>
            </Card>

            <Card className="action-card">
              <h3>Controle de Pagamentos</h3>
              <p>Acompanhar mensalidades e controlar inadimplência</p>
              <Link to="/payments">
                <Button variant="secondary" size="medium">
                  Ver Pagamentos
                </Button>
              </Link>
            </Card>

            <Card className="action-card">
              <h3>Relatórios</h3>
              <p>Gerar relatórios detalhados e análises</p>
              <Link to="/reports">
                <Button variant="outline" size="medium">
                  Gerar Relatórios
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;