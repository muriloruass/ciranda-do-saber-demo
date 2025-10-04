import React from 'react';
import cirandaLogo from './assets/ciranda-logo.png';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="page-header">
          <div className="flex items-center justify-center">
            <img 
              src={cirandaLogo} 
              alt="Ciranda do Saber Logo" 
              style={{ width: '120px', height: 'auto' }}
            />
          </div>
          <h1 className="page-title text-center">
            Ciranda do Saber
          </h1>
          <p className="page-subtitle text-center">
            School Management System Demo
          </p>
        </header>

        <main className="main-content">
          <div className="section">
            <div className="section-header">
              <h2 className="section-title brand-orange">
                Welcome to Our Demo
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title brand-blue">Students</h3>
                </div>
                <div className="card-content">
                  <p className="body-text">
                    Manage student registrations, profiles, and academic records.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="card-title brand-green">Payments</h3>
                </div>
                <div className="card-content">
                  <p className="body-text">
                    Track payments, generate invoices, and manage financial records.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="card-title brand-orange">Reports</h3>
                </div>
                <div className="card-content">
                  <p className="body-text">
                    Generate comprehensive reports and analytics for decision making.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="text-center">
              <p className="body-large text-gray-600">
                This is a <span className="brand-orange font-semibold">demonstration project</span> built with React + TypeScript
              </p>
              <p className="body-small text-gray-500 mt-2">
                "Educating with commitment since 2006"
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
