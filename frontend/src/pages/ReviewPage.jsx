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
        <p className="mb-5 flex items-center">
          {reviewInfo.upvotes.length} upvote
          <button className="rounded-full p-1 ml-4 bg-teal hover:bg-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>
          </button>
        </p>
        {reviewInfo.content.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
   );
}
 
export default ReviewPage;