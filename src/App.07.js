import { Comment } from './03-Components/Components';

function App() {
  const comment = {
    date: new Date(),
    text: 'Disfruta tu aprendizaje en programación!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  return (
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />
  );
}

export default App;

/*****************ACTIVIDAD ************************************
1. Crear un arreglo de comentarios
2. Mostrar una lista de los comentarios en pantalla usando el 
   componente Comment del ejercicio 3
*****************************************************************/