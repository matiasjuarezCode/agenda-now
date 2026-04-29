/**
 * COMENTARIO DIDÁCTICO: ¿Qué es una Interfaz?
 * Una interfaz es un contrato que define la "forma" que debe tener un objeto.
 * En TypeScript, el tipado nos ayuda a evitar errores: si intentas acceder a 
 * empresa.nomre (con error), TypeScript te avisará inmediatamente que esa 
 * propiedad no existe en la interfaz Empresa.
 **/
export interface Empresa {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  activa: boolean;
}
