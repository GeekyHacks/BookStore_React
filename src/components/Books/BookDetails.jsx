const BookDetails = () => {
  const result = (
    <div className="BookDetails">
      <span>Action</span>
      <h2>The Hunger Games</h2>
      <span>Author name</span>
      <div>
        <button type="button">Comments</button>
        <span>|</span>
        <button type="button">Remove</button>
        <span>|</span>
        <button type="button">Edit</button>
      </div>
    </div>
  );

  return result;
};

export default BookDetails;
