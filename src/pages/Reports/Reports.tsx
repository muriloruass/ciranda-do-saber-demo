import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import './Reports.css';

const Reports: React.FC = () => {
  const reportData = {
    totalStudents: 145,
    activeStudents: 142,
    monthlyRevenue: 52800,
    collectionRate: 89,
    averagePayment: 380,
    newEnrollments: 12
  };

  return (
    <div className="reports-page">
      <header className="reports-header">
        <div className="header-content">
          <Logo size="medium" />
          <h1>Relatórios e Análises</h1>
          <Link to="/dashboard">
            <Button variant="outline" size="small">
              Voltar ao Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <main className="reports-main">
        <div className="reports-container">
          <div className="reports-summary">
            <Card className="report-card">
              <div className="report-content">
                <div className="report-icon">👥</div>
                <h3>Estudantes Ativos</h3>
                <div className="report-value">{reportData.activeStudents}</div>
                <p className="report-description">de {reportData.totalStudents} total</p>
                <div className="report-percentage">98% atividade</div>
              </div>
            </Card>

            <Card className="report-card">
              <div className="report-content">
                <div className="report-icon">💰</div>
                <h3>Receita Mensal</h3>
                <div className="report-value">R$ {reportData.monthlyRevenue.toLocaleString()}</div>
                <p className="report-description">Outubro 2025</p>
                <div className="report-percentage">+15% vs mês anterior</div>
              </div>
            </Card>

            <Card className="report-card">
              <div className="report-content">
                <div className="report-icon">📊</div>
                <h3>Taxa de Cobrança</h3>
                <div className="report-value">{reportData.collectionRate}%</div>
                <p className="report-description">Mensalidades em dia</p>
                <div className="report-percentage">Meta: 85%</div>
              </div>
            </Card>

            <Card className="report-card">
              <div className="report-content">
                <div className="report-icon">🎓</div>
                <h3>Novas Matrículas</h3>
                <div className="report-value">{reportData.newEnrollments}</div>
                <p className="report-description">Este mês</p>
                <div className="report-percentage">+20% crescimento</div>
              </div>
            </Card>
          </div>

          <div className="reports-actions">
            <Card className="action-card">
              <div className="action-content">
                <div className="action-icon">📈</div>
                <h3>Relatório Financeiro</h3>
                <p>Receitas, despesas e análise de fluxo de caixa mensal</p>
                <Button 
                  variant="primary" 
                  size="medium"
                  onClick={() => alert('📈 Relatório Financeiro Gerado!\n\nReceita Total: R$ 52.800\nDespesas: R$ 12.400\nLucro Líquido: R$ 40.400\n\nEm um sistema real, geraria PDF ou Excel.')}
                >
                  Gerar Relatório
                </Button>
              </div>
            </Card>

            <Card className="action-card">
              <div className="action-content">
                <div className="action-icon">👥</div>
                <h3>Relatório de Estudantes</h3>
                <p>Lista completa com status de pagamentos e frequência</p>
                <Button 
                  variant="secondary" 
                  size="medium"
                  onClick={() => alert('👥 Lista de Estudantes Exportada!\n\nTotal: 145 estudantes\nAtivos: 142\nInativos: 3\n\nArquivo baixado: estudantes_outubro_2025.xlsx')}
                >
                  Exportar Lista
                </Button>
              </div>
            </Card>

            <Card className="action-card">
              <div className="action-content">
                <div className="action-icon">⚠️</div>
                <h3>Inadimplência</h3>
                <p>Estudantes com pagamentos em atraso e ações necessárias</p>
                <Link to="/overdue">
                  <Button variant="danger" size="medium">
                    Ver Pendências
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="action-card">
              <div className="action-content">
                <div className="action-icon">📋</div>
                <h3>Relatório Mensal</h3>
                <p>Resumo completo das atividades e métricas do mês</p>
                <Button 
                  variant="outline" 
                  size="medium"
                  onClick={() => alert('📋 Relatório Mensal - Outubro 2025\n\n• 145 estudantes ativos\n• R$ 52.800 de receita\n• 89% de adimplência\n• 12 novas matrículas\n\n📄 Download iniciado: relatorio_outubro_2025.pdf')}
                >
                  Download PDF
                </Button>
              </div>
            </Card>
          </div>

          <Card className="chart-placeholder">
            <div className="chart-content">
              <h3>📊 Gráfico de Receitas (Últimos 6 Meses)</h3>
              <div className="chart-mock">
                <div className="chart-bars">
                  <div className="bar" style={{height: '60%'}}><span>Mai</span></div>
                  <div className="bar" style={{height: '70%'}}><span>Jun</span></div>
                  <div className="bar" style={{height: '65%'}}><span>Jul</span></div>
                  <div className="bar" style={{height: '80%'}}><span>Ago</span></div>
                  <div className="bar" style={{height: '85%'}}><span>Set</span></div>
                  <div className="bar" style={{height: '100%'}}><span>Out</span></div>
                </div>
                <p className="chart-description">
                  Crescimento consistente de 15% ao mês na receita
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Reports;