import inactiveStar from "../../assets/star-inactive.svg";
import activeStar from "../../assets/star-active.svg";
import "./rating.scss";
function Rating({ rating }) {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <img
                    key={star}
                    src={star <= rating ? activeStar : inactiveStar}
                    alt={rating + " stars"}
                    className="rating__star"
                />
            ))}
        </div>
    );
}
export default Rating;