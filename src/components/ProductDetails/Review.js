import { useCallback, useEffect, useState } from "react";
import { useGlobalHook } from "../Store/Contex_provider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
const Review = () => {
  const API = "https://first-94ac3-default-rtdb.firebaseio.com/";
  const params =useParams();
  const ProductID=params.ProductID;
   console.log(ProductID)
  const [review, setreview] = useState(null);
  const [getReviews, setgetreview] = useState([]);
  const ctx = useGlobalHook();
  const userid = ctx.userid;
  
  const postreview = useCallback(
    async (review) => {
      const isexistreview = getReviews.findIndex(
        (item) => item.userid === review.userid
      );
      console.log(isexistreview);
      if (isexistreview !== -1 && review) {
        toast.error("you already submitted the review");
        return;
      }
      try {
        const res = await fetch(`${API}Review/${ProductID}.json`, {
          method: "POST",
          body: JSON.stringify(review),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (res.ok) {
          toast.success("review submitted");
        } else {
          throw Error(data.error.message);
        }
      } catch (err) {
        toast.error(err.message);
      }

      getreview();
    },
    [review]
  );

  useEffect(() => {
    if (review) postreview(review);
  }, [review, postreview]);

  const getreview = useCallback(async () => {
    try {
      const res = await fetch(`${API}Review/${ProductID}.json`);
      const data = await res.json();
      if (res.ok) {
        // toast.success("review fetch successfully");
      } else {
        throw Error(data.error.message);
      }
      let reviewarray = [];
      console.log(" data,",data)
      for (let key in data) {
        const item = data[key];
        reviewarray.push({
          one_word: item.one_word,
          detail: item.detail,
          userid: item.userid,
        });
      }
      setgetreview(reviewarray);
    } catch (err) {
      toast.error(err.message);
    }
  }, [ProductID]);

  console.log("this could be us but ", getReviews);
  useEffect(() => {
    getreview();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewObj = {
      one_word: e.target.one_word.value,
      detail: e.target.DetailReview.value,
      userid: userid,
    };
    setreview(reviewObj);
    e.target.reset();
  };

  console.log(ctx.userid);
  return (
    <>
      <div className="container mt-4 mb-2" >
        {getReviews.map((review, index) => (
          <div className="card mt-2" key={index}>
            <div className="card-body">
              <p className="card-text">
                <strong>One Word:</strong> {review.one_word}
              </p>
              <p className="card-text">
                <strong>Detail:</strong> {review.detail}
              </p>
              <p className="card-text">
                <strong>submitted by:</strong> {review.userid}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="container d-flex justify-content-center text-center">
        <form
          onSubmit={submitHandler}
          className="form-control d-flex flex-column"
          style={{ width: "500px" }}
        >
          <h3>Write Review</h3>
          <input
            type="text"
            name="one_word"
            maxLength={10}
            placeholder="Share your thoughts in one word"
            className="text-center border-0 border-bottom border-2 border-dark my-3"
            required
          />
          <input
            type="text"
            name="DetailReview"
            placeholder="Write your review here"
            required
            className="border-0 border-bottom border-2 text-center border-dark mt-1"
          />
          <button className="btn btn-success mt-1" type="submit">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export  default  Review ;
