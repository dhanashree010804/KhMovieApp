import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Setting.css'; // Ensure CSS is correctly linked

const Settings = () => {
  const [settings, setSettings] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('settings')) || {
      theme: 'light',
      notifications: true,
      language: 'English',
    };
    setSettings(savedSettings);
  }, []);

  const handleSaveSettings = (newSettings) => {
    localStorage.setItem('settings', JSON.stringify(newSettings));
    setSettings(newSettings);
  };

  const handleLogout = () => {
    // Perform logout actions like clearing user data, tokens, etc.
    // After logout, navigate to the sign-up page
    localStorage.removeItem('user'); // If you store user data in localStorage
    navigate('/signup'); // Redirect to the sign-up page
  };

  const handleAddAccount = () => {
    // Placeholder for the "Add Account" action
    alert('Add Account feature coming soon!');
    // Implement account addition logic here if required
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      {Object.keys(settings).length === 0 ? (
        <p>No settings saved yet.</p>
      ) : (
        <ul className="settings-list">
          <li>
            <strong>Theme:</strong> {settings.theme}
          </li>
          <li>
            <strong>Notifications:</strong> {settings.notifications ? 'Enabled' : 'Disabled'}
          </li>
          <li>
            <strong>Language:</strong> {settings.language}
          </li>
        </ul>
      )}

      <div className="button-group">
        <button 
          onClick={() => handleSaveSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' })} 
          className="settings-button toggle-button">
          Toggle Theme
        </button>
        <button 
          onClick={() => handleSaveSettings({ ...settings, notifications: !settings.notifications })} 
          className="settings-button toggle-button">
          Toggle Notifications
        </button>
      </div>

      <div className="action-buttons">
        <button onClick={handleLogout} className="settings-button">
          Logout
        </button>
        <button onClick={handleAddAccount} className="settings-button">
          Add Account
        </button>
        <div className="link-container">
          <Link to="/review-drafts" className="settings-link">Review Drafts</Link>
          <Link to="/terms-of-service" className="settings-link">Terms of Service & Privacy Policy</Link>
          <Link to="/help-support" className="settings-link">Help & Support</Link>
          <Link to="/edit-profile" className="settings-link">Edit Username & Bio</Link>
          <Link to="/home" className="settings-link">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
