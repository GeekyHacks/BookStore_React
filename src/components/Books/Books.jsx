import BookDetails from './BookDetails';
import BookStatus from './BookStatus';
import BookChapter from './BookChapter';
const Books = () => {
  const result = (
    <div className="Books">
      <BookDetails />
      <BookStatus />
      <BookChapter />
    </div>
  );
  return result;
};

export default Books;
