import React, { useState, useEffect } from "react";
import "./ReviewCard.css";
import { getFavouriteFlag } from "../../../logic/getDetails";
import ReactTooltip from "react-tooltip";
import { toggleFavouriteNote } from "../../../redux"
import {connect} from "react-redux"

const ReviewCard = ({ title, author, note, id, favNotes, toggleFavNote }) => {
  const [favouriteFlag, setFavouriteFlag] = useState(false);
  const [idState, setIDState] = useState();

  useEffect(() => {
    console.log(`ID changed to: ${id}`);
    setIDState(id);
  }, id);

  const handleFavouriteFlag = async () => {
    console.log(`Button clicked! id: ${id}`);
    // toggleFavNote()
    // TODO: get favourite notes toggle working
    // just need to determine best way to see if note is true or false
    // if true, set favouriteFlag = true, o.w. false 
    // might be inefficient to query databse for each note on page, 
    // therefore store all notes in redux store (update databse when favourites change and update store at same time)


    try {
      const resp = await getFavouriteFlag({ id });
    } catch (err) {
      console.error(err);
    }
  };

  


  const updateFavouriteFlag = async () => {

  };

  return (
    <div className="drev-main-highlights-container">
      <div className="drev-upper-card-container">
        <div className="drev-highlight-parent">
          <div className="drev-highlight-block">
            <div className="drev-media">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Publication128/v4/f3/69/5f/f3695f43-ade6-325d-ff22-2038d07d0b43/9780008312855.jpg/1400x2141w.jpg"
                class="highlight-title-image media-left"
              />
              <a
                style={{ textDecoration: "none" }}
                class="media-content"
                href=""
              >
                <span className="drev-highight-title">{title}</span>
                <p className="drev-highlight-author">{author}</p>
              </a>
            </div>

            <div className="drev-highlight-text">{note}</div>
          </div>
        </div>
        <div className="drev-bottom-buttons-container">
          <div className="tag-buttons-column drev-bottom-no-tags"></div>
          <div className="drev-bottom-tags column has-text-right icon-column level highlight-buttons-icon-level">
            <div className="level-item icon-parent has-text-centered no-select">
              <a data-tip data-for="tags">
                <p className="drev-p">
                  <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/tag.f67ddb3a33cb.svg" />
                </p>
              </a>
              <ReactTooltip
                className="custom-tooltip"
                id="tags"
                delayShow={200}
                delayHide={100}
                type="info"
                effect="solid"
              >
                <span>Add tags to this highlight.</span>
              </ReactTooltip>
              <p className="icon-label">Tag</p>
            </div>
            <div className="level-item icon-parent has-text-centered no-select">
              <a data-tip data-for="favourite">
                <p className="drev-p">
                  {!favouriteFlag ? (
                    <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/favorite-full.519718cc5ddf.svg" />
                  ) : (
                    <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/favorite.90dd0caf3364.svg" />
                  )}
                </p>
              </a>
              <ReactTooltip
                className="custom-tooltip"
                id="favourite"
                delayShow={200}
                delayHide={100}
                type="info"
                effect="solid"
              >
                <span>
                  Favourite your best highlights and make it easy to find them
                  later.
                </span>
              </ReactTooltip>
              <p className="icon-label">Favourite</p>
            </div>
            <div className="level-item icon-parent has-text-centered no-select">
              <a data-tip data-for="edit">
                <p className="drev-p">
                  <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/note.a58295468439.svg" />
                </p>
              </a>
              <ReactTooltip
                className="custom-tooltip"
                id="edit"
                delayShow={200}
                delayHide={100}
                type="info"
                effect="solid"
              >
                <span>Add a note or edit your highlight.</span>
              </ReactTooltip>
              <p className="icon-label">Edit</p>
            </div>
            <div className="level-item icon-parent has-text-centered no-select">
              <a data-tip data-for="share">
                <p className="drev-p">
                  <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/share.72e0a6c38285.svg" />
                </p>
              </a>
              <ReactTooltip
                className="custom-tooltip"
                id="share"
                delayShow={200}
                delayHide={100}
                type="info"
                effect="solid"
              >
                <span>Share your highlight.</span>
              </ReactTooltip>
              <p className="icon-label">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favNotes: state.notes.favNotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFavNote: (note) => dispatch(toggleFavouriteNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard);
