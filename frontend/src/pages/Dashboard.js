import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roleFilter, setRoleFilter] = useState('All');
  const [currentUserRole, setCurrentUserRole] = useState('Administrator'); // Default to Administrator for demo

  // Mock user data (since we're not connecting to backend)
  useEffect(() => {
    const mockUsers = [
      { id: 1, username: 'admin', role: 'Administrator', lastLogin: '2023-10-15' },
      { id: 2, username: 'johndoe', role: 'User', lastLogin: '2023-10-14' },
      { id: 3, username: 'janedoe', role: 'User', lastLogin: '2023-10-13' },
      { id: 4, username: 'manager1', role: 'Manager', lastLogin: '2023-10-12' },
      { id: 5, username: 'support1', role: 'Support', lastLogin: '2023-10-11' }
    ];
    
    // Simulate API call delay
    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 800);
  }, []);

  // Filter users based on selected role
  const filteredUsers = roleFilter === 'All' 
    ? users 
    : users.filter(user => user.role === roleFilter);

  // Count users by role
  const roleCount = (role) => users.filter(user => user.role === role).length;

  // Function to handle edit action
  const handleEdit = (userId) => {
    alert(`Edit user with ID: ${userId}`);
  };

  // Function to handle delete action
  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      alert(`Delete user with ID: ${userId}`);
      // In a real app, you would call an API and then update the state
    }
  };

  // Switch between admin and non-admin view (for demo purposes)
  const toggleUserRole = () => {
    setCurrentUserRole(currentUserRole === 'Administrator' ? 'User' : 'Administrator');
  };

  return (
    <div className="dashboard-container">
      <h1>User Management Dashboard</h1>
      
      {/* Demo toggle for admin/non-admin view */}
      <div className="role-toggle">
        <button onClick={toggleUserRole} className="role-toggle-btn">
          Currently viewing as: {currentUserRole} (click to toggle)
        </button>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>
        <div className="stat-card">
          <h3>Admins</h3>
          <p>{roleCount('Administrator')}</p>
        </div>
        <div className="stat-card">
          <h3>Regular Users</h3>
          <p>{roleCount('User')}</p>
        </div>
        <div className="stat-card">
          <h3>Managers</h3>
          <p>{roleCount('Manager')}</p>
        </div>
        <div className="stat-card">
          <h3>Support</h3>
          <p>{roleCount('Support')}</p>
        </div>
      </div>
      
      <div className="user-list-section">
        <div className="user-list-header">
          <h2>User List</h2>
          <div className="filter-container">
            <label htmlFor="roleFilter">Filter by Role:</label>
            <select 
              id="roleFilter" 
              value={roleFilter} 
              onChange={(e) => setRoleFilter(e.target.value)}
              className="role-filter"
            >
              <option value="All">All Roles</option>
              <option value="Administrator">Administrator</option>
              <option value="User">User</option>
              <option value="Manager">Manager</option>
              <option value="Support">Support</option>
            </select>
          </div>
        </div>
        
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Role</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>{user.lastLogin}</td>
                  <td>
                    <button 
                      className="edit-btn"
                      onClick={() => handleEdit(user.id)}
                    >
                      Edit
                    </button>
                    {currentUserRole === 'Administrator' && (
                      <button 
                        className="delete-btn"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {filteredUsers.length === 0 && !loading && (
          <p className="no-results">No users found with the selected role.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 