import React, { Component } from 'react';
import { ToastContainer, Bounce } from 'react-toastify';

import { LoadMoreButton, ImageGallery, Searchbar, Loader } from 'components';
import { STATES, MESSAGES, PER_PAGE } from 'constants';
import { notify } from 'services/toast-messages';
import fetchImage from 'services/pixabay-api';

export default class App extends Component {
  state = {
    query: null,
    images: [],
    page: 1,
    error: null,
    showModal: false,
    status: STATES.idle,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query === query && prevState.page === page) {
      return;
    }
    this.getImage(query, page);
  }

  handleFormSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      totalHits: 0,
      error: null,
      showModal: false,
    });
  };

  getImage = async (query, page) => {
    this.setLoading();

    try {
      const { hits, totalHits } = await fetchImage({ query, page });
      this.updateImages(hits, totalHits);
      this.handleResults(hits, totalHits, query, page);
    } catch (error) {
      this.handleError(error);
    }
  };

  setLoading = () => {
    this.setState({ status: STATES.loading });
  };

  updateImages = (hits, totalHits) => {
    this.setState(prevState => ({
      images: [...prevState.images, ...hits],
      totalHits,
    }));
  };

  handleResults = (hits, totalHits, query, page) => {
    if (hits.length === 0) {
      this.setState({ status: STATES.idle });
      notify.noResults(query);
      return;
    }

    this.setState({ status: STATES.resolved });

    if (page === 1) {
      notify.success(totalHits);
    }

    const loadedImages = (page - 1) * PER_PAGE + hits.length;
    const remaining = totalHits - loadedImages;

    if (remaining > 0 && remaining < PER_PAGE) {
      notify.rest(remaining);
    }
  };

  handleError = error => {
    this.setState({
      error,
      status: STATES.rejected,
    });
    notify.error(error);
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status, totalHits } = this.state;
    const canShowLoadMoreBtn = totalHits > images.length;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === STATES.idle && <p>{MESSAGES.searchPrompt}</p>}
        {status === STATES.loading && <Loader />}
        <ImageGallery images={images} />
        {canShowLoadMoreBtn && <LoadMoreButton onLoadMore={this.onLoadMore} />}
        {status === STATES.rejected && (
          <p style={{ color: 'red' }}>{this.state.error?.message}</p>
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    );
  }
}
