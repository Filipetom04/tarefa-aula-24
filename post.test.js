// post.test.js
import { describe, test, expect } from '@jest/globals';
import { savePost } from './post.js';

describe('Módulo de Posts', () => {
  test('Deve salvar post válido', () => {
    const resultado = savePost('Título Longo', 'Conteúdo aqui', 'Autor');
    expect(resultado).toBe('Sucesso: Post salvo');
  });

  test('Deve rejeitar título curto', () => {
    const resultado = savePost('Oi', 'Conteúdo', 'Autor');
    expect(resultado).toBe('Erro: Título muito curto');
  });
});
