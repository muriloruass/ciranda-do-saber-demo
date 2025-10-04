import React from 'react';
import { Button, Logo } from './components';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="page-header">
          <div className="flex items-center justify-center">
            <Logo size="large" showText />
          </div>
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
                  <div className="mt-4">
                    <Button variant="secondary" size="small">
                      View Students
                    </Button>
                  </div>
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
                  <div className="mt-4">
                    <Button variant="success" size="small">
                      View Payments
                    </Button>
                  </div>
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
                  <div className="mt-4">
                    <Button variant="primary" size="small">
                      View Reports
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <h2 className="section-title brand-green">
                Logo Component Demo
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-4 mb-4">Logo Sizes</h3>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="text-center">
                    <Logo size="small" />
                    <p className="text-xs text-gray-500 mt-2">Small</p>
                  </div>
                  <div className="text-center">
                    <Logo size="medium" />
                    <p className="text-xs text-gray-500 mt-2">Medium</p>
                  </div>
                  <div className="text-center">
                    <Logo size="large" />
                    <p className="text-xs text-gray-500 mt-2">Large</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="heading-4 mb-4">Logo with Text</h3>
                <div className="flex flex-col gap-6">
                  <div className="text-center">
                    <Logo size="medium" showText />
                  </div>
                  <div className="text-center">
                    <Logo size="large" showText />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="heading-4 mb-4">Interactive Logo</h3>
                <div className="text-center">
                  <Logo 
                    size="medium" 
                    showText 
                    clickable 
                    onClick={() => alert('Logo clicked! Navigate to home.')}
                  />
                  <p className="text-xs text-gray-500 mt-2">Click me!</p>
                </div>
              </div>
              
              <div>
                <h3 className="heading-4 mb-4">Custom Text</h3>
                <div className="text-center">
                  <Logo 
                    size="medium" 
                    showText 
                    customText="Welcome Demo!"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <h2 className="section-title brand-blue">
                Button Components Demo
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-4 mb-4">Button Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>
              
              <div>
                <h3 className="heading-4 mb-4">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" size="small">Small</Button>
                  <Button variant="primary" size="medium">Medium</Button>
                  <Button variant="primary" size="large">Large</Button>
                </div>
              </div>
              
              <div>
                <h3 className="heading-4 mb-4">Button States</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" loading>Loading...</Button>
                  <Button variant="secondary" disabled>Disabled</Button>
                  <Button variant="outline" fullWidth>Full Width</Button>
                </div>
              </div>
              
              <div>
                <h3 className="heading-4 mb-4">Interactive Examples</h3>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="success" 
                    onClick={() => alert('Student added!')}
                  >
                    Add Student
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => alert('Report generated!')}
                  >
                    Generate Report
                  </Button>
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
