const BookChapter = () => {
    const result = (
      <div className="BookChapter">
        <div sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <div size="lg" determinate value="64%">
            64%
          </div>
        </div>
        <div>
          <h3 className="headSpan">
            64% <br />
            <span>Completed</span>
          </h3>
        </div>
      </div>
    );
  
    return result;
  };
  
  export default BookChapter;