import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ReviewListPage = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/reviews/all");
        const allReviews = response.data;
        setAllReviews(allReviews);
      } catch (error) {
        console.log("Error fetching reviews", error);
      }
    }

    loadReviews();
  }, []);

  return ( 
    <section className="container mx-auto">
      <div className="text-center -mt-36 mb-8">
        <h2 className="text-6xl font-bangers tracking-wide">Latest Reviews</h2>
      </div>
      
      <ol>
        {allReviews.map((review) => (
          <li key={review._id} className="mb-10 hover:text-fuchsia-400">
            <Link to={`/reviews/${review.name}`}>
              <div className="max-w-prose mx-auto mb-8">
                <h3 className="text-4xl font-bold mb-4">{review.title}</h3>
                <p className="mb-2">{review.content[0].substring(0, 150)}...</p>
              </div>
              <hr/>
            </Link>
          </li>
        ))}  
      </ol>
      <p>List of reviews here...</p>
    </section>
   );
}
 
export default ReviewListPage;