import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>¡Hola, mi nombre es Alexis Rozas</h1>
      <p style={styles.subtitle}>Bienvenido a mi page en React.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    color: '#333',
    margin: 0,
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
  },
};