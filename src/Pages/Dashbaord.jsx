import React, { useState } from 'react';

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('');
  const [subOption, setSubOption] = useState('');
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      address1: '123 Main St',
      address2: 'Apt 101',
      mobile: '9876543210',
      email: 'john.doe@example.com',
      aadhar: '1111-2222-3333',
      tenth: '88%',
      twelfth: '92%',
    },
    {
      id: 2,
      name: 'Jane Smith',
      address1: '456 Elm St',
      address2: 'Suite 202',
      mobile: '8765432109',
      email: 'jane.smith@example.com',
      aadhar: '4444-5555-6666',
      tenth: '90%',
      twelfth: '89%',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      address1: '789 Oak St',
      address2: '',
      mobile: '7654321098',
      email: 'alice.j@example.com',
      aadhar: '7777-8888-9999',
      tenth: '85%',
      twelfth: '87%',
    },
  ]);

  const handleAddStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: `Student ${students.length + 1}`,
      address1: 'New Address 1',
      address2: 'New Address 2',
      mobile: '1234567890',
      email: `student${students.length + 1}@example.com`,
      aadhar: '0000-1111-2222',
      tenth: `${80 + students.length}%`,
      twelfth: `${85 + students.length}%`,
    };
    setStudents([...students, newStudent]);
  };

  const menuItems = ['Student', 'Admission', 'Registration', 'Teacher'];

  const renderAdmissionContent = () => {
    if (subOption === 'Offline') {
      return (
        <div>
          <button
            onClick={handleAddStudent}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            Add Registration
          </button>
        </div>
      );
    }
    if (subOption === 'Admin') {
      return (
        <div style={{ overflowX: 'auto', width: '100%' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: '#fff',
              color: '#2c3e50',
              textAlign: 'left',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <thead style={{ backgroundColor: '#34495e', color: '#ecf0f1' }}>
              <tr>
                <th style={{ padding: '10px' }}>S.N.</th>
                <th style={{ padding: '10px' }}>Name of Student</th>
                <th style={{ padding: '10px' }}>Address 1</th>
                <th style={{ padding: '10px' }}>Address 2</th>
                <th style={{ padding: '10px' }}>Mobile No.</th>
                <th style={{ padding: '10px' }}>Email ID</th>
                <th style={{ padding: '10px' }}>Aadhar No.</th>
                <th style={{ padding: '10px' }}>10th %</th>
                <th style={{ padding: '10px' }}>12th %</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.id}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.name}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.address1}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.address2}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.mobile}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.email}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.aadhar}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.tenth}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.twelfth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div>
        <button
          onClick={() => setSubOption('Online')}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Online
        </button>
        <button
          onClick={() => setSubOption('Offline')}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Offline
        </button>
        <button
          onClick={() => setSubOption('Admin')}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Admin
        </button>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Menu</h2>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveItem(item);
              setSubOption('');
            }}
            style={{
              padding: '10px',
              marginBottom: '10px',
              cursor: 'pointer',
              borderRadius: '5px',
              backgroundColor: activeItem === item ? '#34495e' : 'transparent',
              transition: 'background-color 0.3s',
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#ecf0f1', color: '#2c3e50' }}>
        {activeItem === 'Admission' ? (
          renderAdmissionContent()
        ) : (
          <h2 style={{ textAlign: 'center' }}>
            {activeItem ? `You clicked on ${activeItem}` : 'Please select an option from the sidebar'}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
