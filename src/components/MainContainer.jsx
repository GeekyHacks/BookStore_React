import Books from './Books/Books';
import AddBook from './Books/AddBook';

const MainContainer = () => {
  const result = (
    <div className="MainContainer">
      <Books />
      <span className="hSpan"></span>
      <AddBook />
    </div>
  );
  return result;
};

export default MainContainer;
