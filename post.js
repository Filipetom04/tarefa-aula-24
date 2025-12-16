// post.js
const savePost = (title, content, author) => {
  if (!title) return 'Erro: Título inválido';
  if (title.length <= 5) return 'Erro: Título muito curto';
  if (!content) return 'Erro: Conteúdo vazio';

  const post = {
    title,
    content,
    author,
    date: new Date(),
  };

  console.log('Salvando no banco:', post); // <--- ADICIONE ESTA LINHA

  return 'Sucesso: Post salvo';
};

export { savePost };
