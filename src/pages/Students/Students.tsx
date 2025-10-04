import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { Modal } from '../../components/Modal';
import './Students.css';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  class: string;
  status: 'ativo' | 'inativo';
}

const Students: React.FC = () => {
  const [students] = useState<Student[]>([
    { id: 1, name: 'Ana Silva', email: 'ana@email.com', phone: '(11) 99999-0001', class: 'Infantil A', status: 'ativo' },
    { id: 2, name: 'João Santos', email: 'joao@email.com', phone: '(11) 99999-0002', class: 'Fundamental 1', status: 'ativo' },
    { id: 3, name: 'Maria Oliveira', email: 'maria@email.com', phone: '(11) 99999-0003', class: 'Infantil B', status: 'inativo' },
    { id: 4, name: 'Pedro Costa', email: 'pedro@email.com', phone: '(11) 99999-0004', class: 'Fundamental 2', status: 'ativo' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    birthDate: '',
    parentName: '',
    parentPhone: ''
  });

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`🎓 Aluno Adicionado com Sucesso!\n\nNome: ${newStudent.name}\nEmail: ${newStudent.email}\nTurma: ${newStudent.class}\n\nEm um sistema real, seria salvo no banco de dados.`);
    setShowAddModal(false);
    setNewStudent({ name: '', email: '', phone: '', class: '', birthDate: '', parentName: '', parentPhone: '' });
  };

  return (
    <div className="students-page">
      <header className="students-header">
        <div className="header-content">
          <Logo size="medium" />
          <h1>Gestão de Estudantes</h1>
          <Link to="/dashboard">
            <Button variant="outline" size="small">
              Voltar ao Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <main className="students-main">
        <div className="students-container">
          <div className="students-top">
            <h2>Lista de Estudantes</h2>
            <Button 
              variant="primary" 
              size="medium"
              onClick={() => setShowAddModal(true)}
            >
              + Adicionar Estudante
            </Button>
          </div>

          <Card className="students-table-card">
            <div className="students-table">
              <div className="table-header">
                <div className="table-cell">Nome</div>
                <div className="table-cell">Email</div>
                <div className="table-cell">Telefone</div>
                <div className="table-cell">Turma</div>
                <div className="table-cell">Status</div>
                <div className="table-cell">Ações</div>
              </div>
              
              {students.map((student) => (
                <div key={student.id} className="table-row">
                  <div className="table-cell" data-label="Nome">
                    <strong>{student.name}</strong>
                  </div>
                  <div className="table-cell" data-label="Email">{student.email}</div>
                  <div className="table-cell" data-label="Telefone">{student.phone}</div>
                  <div className="table-cell" data-label="Turma">{student.class}</div>
                  <div className="table-cell" data-label="Status">
                    <span className={`status-badge ${student.status}`}>
                      {student.status}
                    </span>
                  </div>
                  <div className="table-cell" data-label="Ações">
                    <div className="action-buttons">
                      <Button 
                        variant="outline" 
                        size="small"
                        onClick={() => alert(`✏️ Editando: ${student.name}\n\nEm um sistema real, abriria formulário de edição.`)}
                      >
                        Editar
                      </Button>
                      <Button 
                        variant="danger" 
                        size="small"
                        onClick={() => alert(`🗑️ Excluir: ${student.name}\n\nEm um sistema real, pediria confirmação antes de excluir.`)}
                      >
                        Excluir
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
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="🎓 Adicionar Novo Estudante"
      >
        <form onSubmit={handleAddStudent}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo *</label>
            <input
              type="text"
              id="name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
              placeholder="Ex: João Silva Santos"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={newStudent.email}
                onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                placeholder="joao@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                value={newStudent.phone}
                onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                placeholder="(11) 99999-0000"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="class">Turma *</label>
              <select
                id="class"
                value={newStudent.class}
                onChange={(e) => setNewStudent({...newStudent, class: e.target.value})}
                required
              >
                <option value="">Selecione a turma</option>
                <option value="Infantil A">Infantil A</option>
                <option value="Infantil B">Infantil B</option>
                <option value="Fundamental 1">Fundamental 1</option>
                <option value="Fundamental 2">Fundamental 2</option>
                <option value="Médio A">Médio A</option>
                <option value="Médio B">Médio B</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Data de Nascimento</label>
              <input
                type="date"
                id="birthDate"
                value={newStudent.birthDate}
                onChange={(e) => setNewStudent({...newStudent, birthDate: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="parentName">Nome do Responsável</label>
            <input
              type="text"
              id="parentName"
              value={newStudent.parentName}
              onChange={(e) => setNewStudent({...newStudent, parentName: e.target.value})}
              placeholder="Ex: Maria Silva Santos"
            />
          </div>

          <div className="form-group">
            <label htmlFor="parentPhone">Telefone do Responsável</label>
            <input
              type="tel"
              id="parentPhone"
              value={newStudent.parentPhone}
              onChange={(e) => setNewStudent({...newStudent, parentPhone: e.target.value})}
              placeholder="(11) 99999-0000"
            />
          </div>

          <div className="form-actions">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setShowAddModal(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Adicionar Estudante
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Students;