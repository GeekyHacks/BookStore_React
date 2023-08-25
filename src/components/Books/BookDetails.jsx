const BookDetails = () => {
  const result = (
    <div className="BookDetails">
      <span>Action</span>
      <h2>The Hunger Games</h2>
      <span>Author name</span>
      <div>
        <a type="a">Comments</a>
        <span>|</span>
        <a type="a">Remove</a>
        <span>|</span>
        <a type="a">Edit</a>
      </div>
    </div>
  );

  return result;
};

export default BookDetails;
