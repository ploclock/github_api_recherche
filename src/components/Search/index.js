import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import Loader from 'src/components/Loader';
import LoadMore from 'src/components/LoadMore';

export default function Search({
  search,
  setSearch,
  onSubmitSearch,
  message,
  hasError,
  messageVisible,
  loading,
  setMessageVisible,
  results,
  onClickLoadMore,
  showLoadMore,
}) {
  return (
    <div className="search">
      <SearchBar
        inputValue={search}
        onChangeInputValue={setSearch}
        onFormSubmit={onSubmitSearch}
      />
      <Message
        content={message}
        isError={hasError}
        visible={messageVisible}
        onTimeout={setMessageVisible}
      />
      <ReposResults results={results} />
      {loading && <Loader />}
      {showLoadMore && <LoadMore onClickButton={onClickLoadMore} />}
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  messageVisible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setMessageVisible: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  onClickLoadMore: PropTypes.func.isRequired,
  showLoadMore: PropTypes.bool.isRequired,
};
