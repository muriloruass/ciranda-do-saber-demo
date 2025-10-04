import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { Modal } from '../../components/Modal';
import './Payments.css';

interface Payment {
  id: number;
  studentName: string;
  amount: number;
  dueDate: string;
  paymentDate?: string;
  status: 'pago' | 'pendente' | 'atrasado';
  method?: string;
}

const Payments: React.FC = () => {
  const [payments] = useState<Payment[]>([
    { id: 1, studentName: 'Ana Silva', amount: 380, dueDate: '2025-10-05', paymentDate: '2025-10-03', status: 'pago', method: 'PIX' },
    { id: 2, studentName: 'João Santos', amount: 380, dueDate: '2025-10-05', status: 'pendente' },
    { id: 3, studentName: 'Maria Oliveira', amount: 380, dueDate: '2025-09-05', status: 'atrasado' },
    { id: 4, studentName: 'Pedro Costa', amount: 420, dueDate: '2025-10-05', paymentDate: '2025-10-01', status: 'pago', method: 'Cartão' },
    { id: 5, studentName: 'Carla Mendes', amount: 380, dueDate: '2025-10-05', status: 'pendente' },
  ]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [newPayment, setNewPayment] = useState({
    studentName: '',
    amount: '',
    paymentDate: '',
    method: ''
  });

  const handleRegisterPayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`💰 Pagamento Registrado!\n\nEstudante: ${newPayment.studentName}\nValor: R$ ${newPayment.amount}\nMétodo: ${newPayment.method}\nData: ${new Date(newPayment.paymentDate).toLocaleDateString('pt-BR')}\n\nEm um sistema real, seria salvo no banco de dados.`);
    setShowPaymentModal(false);
    setNewPayment({ studentName: '', amount: '', paymentDate: '', method: '' });
  };

  const totalPago = payments.filter(p => p.status === 'pago').reduce((sum, p) => sum + p.amount, 0);
  const totalPendente = payments.filter(p => p.status === 'pendente').reduce((sum, p) => sum + p.amount, 0);
  const totalAtrasado = payments.filter(p => p.status === 'atrasado').reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="payments-page">
      <header className="payments-header">
        <div className="header-content">
          <Logo size="medium" />
          <h1>Controle de Pagamentos</h1>
          <Link to="/dashboard">
            <Button variant="outline" size="small">
              Voltar ao Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <main className="payments-main">
        <div className="payments-container">
          <div className="payments-summary">
            <Card className="summary-card pago">
              <div className="summary-content">
                <div className="summary-icon">💰</div>
                <h3>Total Recebido</h3>
                <div className="summary-value">R$ {totalPago.toLocaleString()}</div>
              </div>
            </Card>

            <Card className="summary-card pendente">
              <div className="summary-content">
                <div className="summary-icon">⏳</div>
                <h3>Pendente</h3>
                <div className="summary-value">R$ {totalPendente.toLocaleString()}</div>
              </div>
            </Card>

            <Card className="summary-card atrasado">
              <div className="summary-content">
                <div className="summary-icon">⚠️</div>
                <h3>Em Atraso</h3>
                <div className="summary-value">R$ {totalAtrasado.toLocaleString()}</div>
              </div>
            </Card>
          </div>

          <Card className="payments-table-card">
            <div className="payments-table-header">
              <h2>Lista de Pagamentos - Outubro 2025</h2>
              <Button 
                variant="primary" 
                size="medium"
                onClick={() => setShowPaymentModal(true)}
              >
                + Registrar Pagamento
              </Button>
            </div>
            
            <div className="payments-table">
              <div className="table-header">
                <div className="table-cell">Estudante</div>
                <div className="table-cell">Valor</div>
                <div className="table-cell">Vencimento</div>
                <div className="table-cell">Pagamento</div>
                <div className="table-cell">Status</div>
                <div className="table-cell">Método</div>
                <div className="table-cell">Ações</div>
              </div>
              
              {payments.map((payment) => (
                <div key={payment.id} className="table-row">
                  <div className="table-cell" data-label="Estudante">
                    <strong>{payment.studentName}</strong>
                  </div>
                  <div className="table-cell" data-label="Valor">R$ {payment.amount}</div>
                  <div className="table-cell" data-label="Vencimento">{new Date(payment.dueDate).toLocaleDateString('pt-BR')}</div>
                  <div className="table-cell" data-label="Pagamento">
                    {payment.paymentDate ? new Date(payment.paymentDate).toLocaleDateString('pt-BR') : '-'}
                  </div>
                  <div className="table-cell" data-label="Status">
                    <span className={`status-badge ${payment.status}`}>
                      {payment.status}
                    </span>
                  </div>
                  <div className="table-cell" data-label="Método">{payment.method || '-'}</div>
                  <div className="table-cell">
                    <div className="action-buttons">
                      {payment.status !== 'pago' && (
                        <Button 
                          variant="success" 
                          size="small"
                          onClick={() => alert(`✅ Marcar como Pago: ${payment.studentName}\n\nValor: R$ ${payment.amount}\nEm um sistema real, atualizaria o status no banco de dados.`)}
                        >
                          Marcar Pago
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="small"
                        onClick={() => alert(`📋 Detalhes do Pagamento\n\nEstudante: ${payment.studentName}\nValor: R$ ${payment.amount}\nStatus: ${payment.status}\nVencimento: ${new Date(payment.dueDate).toLocaleDateString('pt-BR')}`)}
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>

      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="💰 Registrar Novo Pagamento"
      >
        <form onSubmit={handleRegisterPayment}>
          <div className="form-group">
            <label htmlFor="studentName">Estudante *</label>
            <select
              id="studentName"
              value={newPayment.studentName}
              onChange={(e) => setNewPayment({...newPayment, studentName: e.target.value})}
              required
            >
              <option value="">Selecione o estudante</option>
              <option value="Ana Silva">Ana Silva</option>
              <option value="João Santos">João Santos</option>
              <option value="Maria Oliveira">Maria Oliveira</option>
              <option value="Pedro Costa">Pedro Costa</option>
              <option value="Carla Mendes">Carla Mendes</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="amount">Valor (R$) *</label>
              <input
                type="number"
                id="amount"
                value={newPayment.amount}
                onChange={(e) => setNewPayment({...newPayment, amount: e.target.value})}
                placeholder="380.00"
                step="0.01"
                min="0"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentDate">Data do Pagamento *</label>
              <input
                type="date"
                id="paymentDate"
                value={newPayment.paymentDate}
                onChange={(e) => setNewPayment({...newPayment, paymentDate: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="method">Método de Pagamento *</label>
            <select
              id="method"
              value={newPayment.method}
              onChange={(e) => setNewPayment({...newPayment, method: e.target.value})}
              required
            >
              <option value="">Selecione o método</option>
              <option value="PIX">PIX</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Transferência">Transferência Bancária</option>
              <option value="Boleto">Boleto Bancário</option>
            </select>
          </div>

          <div className="form-actions">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setShowPaymentModal(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Registrar Pagamento
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Payments;