const Comment = ({ comment }) => {
  const dateObject = new Date(comment.createdAt);
  const formattedDate = dateObject.toDateString();

  // if (!comment.postedByUser) return <div>Loading...</div>;

  return ( 
    <>
      <div className="container mx-auto max-w-prose">
        <header className="comment-header">
          <div>{comment.postedByUser}</div>
          <div>{formattedDate}</div>
        </header>
        <div className="comment-body mb-3">
          <p>{comment.comment}</p>
        </div>
        <hr className="mb-4"/>
      </div>
    </>
   );
}
 
export default Comment;