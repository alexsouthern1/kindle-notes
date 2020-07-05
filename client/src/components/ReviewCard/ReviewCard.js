import React from 'react'
import "./ReviewCard.css";

const ReviewCard = ({title, author, note}) => {
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
                  <div className="drev-highlight-text">
                    {note}
                  </div>
                </div>
              </div>
              <div className="drev-bottom-buttons-container">
                <div className="tag-buttons-column drev-bottom-no-tags"></div>
                <div className="drev-bottom-tags column has-text-right icon-column level highlight-buttons-icon-level">
                  <div className="level-item icon-parent has-text-centered no-select">
                    <p className="drev-p">
                      <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/tag.f67ddb3a33cb.svg" />
                    </p>
                    <p className="icon-label">Tag</p>
                  </div>
                  <div className="level-item icon-parent has-text-centered no-select">
                    <p className="drev-p">
                      {/* <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/favorite.90dd0caf3364.svg" /> */}
                      <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/favorite-full.519718cc5ddf.svg" />
                    </p>
                    <p className="icon-label">Favourite</p>
                  </div>
                  <div className="level-item icon-parent has-text-centered no-select">
                    <p className="drev-p">
                      <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/note.a58295468439.svg" />
                    </p>
                    <p className="icon-label">Edit</p>
                  </div>
                  <div className="level-item icon-parent has-text-centered no-select">
                    <p className="drev-p">
                      <img src="https://readwise-assets.s3.amazonaws.com/static/images/icons/share.72e0a6c38285.svg" />
                    </p>
                    <p className="icon-label">Share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ReviewCard
