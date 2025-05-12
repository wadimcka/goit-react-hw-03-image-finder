import React, { Component } from 'react';
import { ToastContainer, Bounce } from 'react-toastify';

import { ImageGallery, Searchbar, Loader, Modal, Button } from 'components';
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
    selectedImage: null,
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
      error: null,
      showModal: false,
    });
  };

  getImage = async (query, page) => {
    this.setState({ status: STATES.loading });

    try {
      const { hits, totalHits } = await fetchImage({ query, page });
      this.updateImages(hits, totalHits);
      this.handleResults(hits, totalHits, query, page);
    } catch (error) {
      this.handleError(error);
    }
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
    const errorMsg =
      error.response?.data?.message || error.message || 'Unknown error';
    this.setState({
      error: errorMsg,
      status: STATES.rejected,
    });
    notify.error(errorMsg);
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = image => {
    this.setState({
      showModal: true,
      selectedImage: image,
    });
  };

  closeModal = () => {
    this.setState({
      selectedImage: null,
      showModal: false,
    });
  };

  render() {
    const { images, status, totalHits, showModal, selectedImage, error } =
      this.state;
    const canShowLoadMoreBtn = totalHits > images.length;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === STATES.idle}
        {status === STATES.loading && images.length === 0 && <Loader />}
        {status === STATES.rejected && <p>{MESSAGES.error(error)}</p>}

        <ImageGallery images={images} openModal={this.openModal} />

        {canShowLoadMoreBtn &&
          (status === STATES.loading && images.length > 0 ? (
            <Loader />
          ) : (
            <Button onClick={this.onLoadMore}>Load More</Button>
          ))}

        {showModal && (
          <Modal image={selectedImage} closeModal={this.closeModal} />
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
