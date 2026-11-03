import React, { useState } from 'react';

export default function VistaMinimalista() {
  const [mensaje, setMensaje] = useState('¡Hola, Gabriel exe!');

  const cambiarMensaje = () => {
    setMensaje('¡El botón funciona correctamente! 🚀');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>{mensaje}</h1>
      <p style={{ color: '#666', lineHeight: '1.5' }}>
        Esta es una vista súper simple sin librerías de estilos adicionales, lista para que la modifiques a tu gusto.
      </p>
      <button 
        onClick={cambiarMensaje}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Hacer clic
      </button>
    </div>
  );
}