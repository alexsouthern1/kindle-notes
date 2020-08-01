import React, { useState, useEffect } from "react";
import "./Favourites.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { connect } from "react-redux";
import styled from "styled-components";
import { getFavouriteNotes } from "../../logic/getDetails";
import Switch from "react-switch";

const Favourites = () => {
  const [favNoteDetails, setFavNoteDetails] = useState();
  const [switchState, setSwitchState] = useState(false);

  const PageTitle = styled.h1`
    flex: 1;
    font-weight: 500;
    color: #1c3d5a;
    font-size: 20px;
  `;

  const PageSubTitle = styled.h1`
    flex: 1;
    color: #8795a1;
    font-size: 20px;
  `;

  const FavouritesColumn = styled.div`
    display: grid;
    grid-template-columns: ${(props) => (props.boolVar ? "1fr 1fr" : "1fr")};
  `;

  useEffect(() => {
    console.log("Favourites useEffect");
    handleGetFavouriteNotes();
  }, []);

  const handleGetFavouriteNotes = async () => {
    console.log("Submit request for fav notes");
    let resp = await getFavouriteNotes();
    resp = resp.sort((a, b) => b.noteText.length - a.noteText.length);
    setFavNoteDetails(resp);
  };

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
  };

  return (
    <div>
      <div className="drev-outer-container">
        <div className="brev-header">
          <PageTitle>Enjoy your favourites</PageTitle>
          <PageSubTitle>...</PageSubTitle>
          <label className="toggle-switch-container">
            {/* <span style={{marginRight: 10}}>Toggle Layout</span> */}
            <Switch
              onChange={handleSwitchChange}
              checked={switchState}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={15}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={15}
              width={25}
              className="react-switch"
              id="material-switch"
            />
          </label>
        </div>
        <div className="drev-columns">
          <FavouritesColumn boolVar={switchState}>
            {favNoteDetails
              ? favNoteDetails.map((note, id) => (
                  <div className="favourites-card" key={id}>
                    <ReviewCard
                      title={note.bookTitle}
                      author={note.bookAuthor}
                      note={note.noteText}
                      id={note._id}
                      favourite={note.favourite}
                    />
                  </div>
                ))
              : null}
          </FavouritesColumn>

          <div className="column is-1 nav-arrow-right"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps)(Favourites);
