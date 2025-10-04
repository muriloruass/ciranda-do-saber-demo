import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import './Overdue.css';

interface OverdueStudent {
  id: number;
  name: string;
  amount: number;
  daysOverdue: number;
  lastContact: string;
  phone: string;
  email: string;
}

const Overdue: React.FC = () => {
  const overdueStudents: OverdueStudent[] = [
    { id: 1, name: 'Maria Oliveira', amount: 380, daysOverdue: 45, lastContact: '2025-09-15', phone: '(11) 99999-0003', email: 'maria@email.com' },
    { id: 2, name: 'Carlos Silva', amount: 760, daysOverdue: 30, lastContact: '2025-09-20', phone: '(11) 99999-0005', email: 'carlos@email.com' },
    { id: 3, name: 'Ana Costa', amount: 380, daysOverdue: 15, lastContact: '2025-10-01', phone: '(11) 99999-0006', email: 'ana.costa@email.com' },
    { id: 4, name: 'Roberto Santos', amount: 1140, daysOverdue: 60, lastContact: '2025-08-30', phone: '(11) 99999-0007', email: 'roberto@email.com' },
  ];

  const totalOverdue = overdueStudents.reduce((sum, student) => sum + student.amount, 0);
  const averageDays = Math.round(overdueStudents.reduce((sum, student) => sum + student.daysOverdue, 0) / overdueStudents.length);

  return (
    <div className="overdue-page">
      <header className="overdue-header">
        <div className="header-content">
          <Logo size="medium" />
          <h1>⚠️ Gestão de Inadimplência</h1>
          <Link to="/reports">
            <Button variant="outline" size="small">
              Voltar aos Relatórios
            </Button>
          </Link>
        </div>
      </header>

      <main className="overdue-main">
        <div className="overdue-container">
          <div className="overdue-summary">
            <Card className="summary-card critical">
              <div className="summary-content">
                <div className="summary-icon">⚠️</div>
                <h3>Total em Atraso</h3>
                <div className="summary-value">R$ {totalOverdue.toLocaleString()}</div>
                <p className="summary-description">{overdueStudents.length} estudantes</p>
              </div>
            </Card>

            <Card className="summary-card warning">
              <div className="summary-content">
                <div className="summary-icon">📅</div>
                <h3>Média de Atraso</h3>
                <div className="summary-value">{averageDays} dias</div>
                <p className="summary-description">Tempo médio</p>
              </div>
            </Card>

            <Card className="summary-card action">
              <div className="summary-content">
                <div className="summary-icon">📞</div>
                <h3>Ações Pendentes</h3>
                <div className="summary-value">{overdueStudents.filter(s => s.daysOverdue > 30).length}</div>
                <p className="summary-description">Contatos urgentes</p>
              </div>
            </Card>
          </div>

          <Card className="overdue-table-card">
            <div className="overdue-table-header">
              <h2>Lista de Inadimplentes - Ação Requerida</h2>
              <Button variant="primary" size="medium">
                📧 Enviar Notificações
              </Button>
            </div>
            
            <div className="overdue-table">
              <div className="table-header">
                <div className="table-cell">Estudante</div>
                <div className="table-cell">Valor</div>
                <div className="table-cell">Dias Atraso</div>
                <div className="table-cell">Último Contato</div>
                <div className="table-cell">Prioridade</div>
                <div className="table-cell">Ações</div>
              </div>
              
              {overdueStudents.map((student) => (
                <div key={student.id} className="table-row">
                  <div className="table-cell" data-label="Estudante">
                    <div className="student-info">
                      <strong>{student.name}</strong>
                      <span className="contact-info">📞 {student.phone}</span>
                      <span className="contact-info">📧 {student.email}</span>
                    </div>
                  </div>
                  <div className="table-cell" data-label="Valor">
                    <span className="amount-overdue">R$ {student.amount}</span>
                  </div>
                  <div className="table-cell" data-label="Dias Atraso">
                    <span className="days-overdue">{student.daysOverdue} dias</span>
                  </div>
                  <div className="table-cell" data-label="Último Contato">
                    {new Date(student.lastContact).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="table-cell" data-label="Prioridade">
                    <span className={`priority-badge ${student.daysOverdue > 45 ? 'critical' : student.daysOverdue > 30 ? 'high' : 'medium'}`}>
                      {student.daysOverdue > 45 ? 'CRÍTICA' : student.daysOverdue > 30 ? 'ALTA' : 'MÉDIA'}
                    </span>
                  </div>
                  <div className="table-cell">
                    <div className="action-buttons">
                      <Button variant="primary" size="small">
                        📞 Ligar
                      </Button>
                      <Button variant="outline" size="small">
                        📧 Email
                      </Button>
                      <Button variant="success" size="small">
                        ✅ Acordo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="action-suggestions">
            <Card className="suggestion-card">
              <h3>🎯 Sugestões de Ação</h3>
              <ul>
                <li><strong>Crítica (45+ dias):</strong> Contato telefônico imediato + carta registrada</li>
                <li><strong>Alta (30-45 dias):</strong> Ligação + WhatsApp + email de cobrança</li>
                <li><strong>Média (15-30 dias):</strong> Email de lembrete + SMS automático</li>
                <li><strong>Preventiva:</strong> Configurar lembrete 5 dias antes do vencimento</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Overdue;