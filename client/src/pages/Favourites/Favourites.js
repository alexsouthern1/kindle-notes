import React from "react";
import "./Favourites.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Favourites = () => {
  return (
    <div>
      <div className="drev-outer-container">
        <div className="brev-header">
          <div style={{ flex: 1, fontWeight: 600 }}>{"title"}</div>
          <div style={{ flex: 1 }}>{"author"}</div>
        </div>
        <div className="drev-columns">
          <div className="column is-1 nav-arrow-left"></div>
          <div className="column is-1 drev-main-highlights-column">
            <ReviewCard
              title={"note.bookTitle"}
              author={"author"}
              note={"note.noteText"}
            />
          </div>

          <div className="column is-1 nav-arrow-right"></div>
        </div>
      </div>
      <button
        style={{ marginTop: "2.5%", marginBottom: "2.5%" }}
        class="btn btn-primary btn-text"
        onClick={"getNotes"}
      >
        Get Notes
      </button>
    </div>
  );
};

export default Favourites;
