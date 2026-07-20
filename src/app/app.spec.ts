import { App } from './app';

describe('Pruebas Unitarias PWA', () => {
  
  // Prueba básica adaptada a tu título real (Paso 5 de la guía)
  it('Debe tener el título correcto', () => {
    const app = new App();
    expect(app.titulo).toBe('Gestor de Tareas ESPE');
  });

  // ACTIVIDAD 2: Nueva prueba unitaria requerida (verifica la lista de tareas)
  it('Debe iniciar con 3 tareas por defecto', () => {
    const app = new App();
    expect(app.tareas.length).toBe(3);
  });

});