import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { changeQuery } from "../../store/actions/movie";
import { useSearchAutoComplete } from "../../customHooks/index";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchForm = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const { keywordList, keywordLoading } = useSelector(
    (state) => state.movieReducer
  );

  const inputHandler = (e) => {
    setKeyword(e.target.value);
    setOpenDialog(keyword.length > 0 ? true : false);
  };

  const searchAction = (e) => {
    e.preventDefault();

    if (location.pathname != "/") {
      history.push("/");
    }

    dispatch(changeQuery(keyword));
    setOpenDialog(false);
  };

  const chooseKeyword = (title) => {
    setKeyword(title);
    setOpenDialog(false);
  };

  useSearchAutoComplete(keyword);

  return (
    <Form inline onSubmit={searchAction}>
      <FormControl
        value={keyword}
        onChange={inputHandler}
        type="text"
        placeholder="Search Movie"
        className="mr-sm-2 my-2 searchBox"
      />
      {openDialog && (
        <div className="autoCompleteBox">
          {keywordList?.map((keyword, i) => (
            <p
              key={i}
              onClick={() => chooseKeyword(keyword.Title)}
              className="text-left px-2 listAutoComplete"
            >
              {keyword.Title}
            </p>
          ))}
          {keywordLoading && (
            <p className="text-left px-2 listAutoComplete">Loading...</p>
          )}
        </div>
      )}
      <Button type="submit" variant="info">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
