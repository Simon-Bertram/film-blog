import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ReviewPage = () => {
  const [reviewInfo, setReviewInfo] = useState(null);

  const { reviewId } = useParams();
  console.log(reviewId);

  useEffect(() => {
    const loadReviewInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/reviews/${reviewId}`);
        const newReviewInfo = response.data;
        setReviewInfo(newReviewInfo);
        console.log(newReviewInfo);
      } catch (error) {
        console.log("Error fetching review", error);
      }
    }

    loadReviewInfo();
  }, [reviewId]);

  if (!reviewInfo) return <p>Loading...</p>;

  return ( 
    <article className="container mx-auto -mt-20">
      <h1 className="text-5xl text-center font-bold mb-7">{reviewInfo.title}</h1>
      <div className="max-w-prose mx-auto">
        <p className="mb-5">This review has {reviewInfo.upvotes.length} upvotes.</p>
        {reviewInfo.content.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
   );
}
 
export default ReviewPage;