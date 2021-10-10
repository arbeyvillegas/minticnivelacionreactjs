import Comment from './03-Components/Components';

function App() {
  const comment = {
    date: new Date(),
    text: 'Disfruta tu aprendizaje en programación!',
    author: {
      name: 'Hello Guys',
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