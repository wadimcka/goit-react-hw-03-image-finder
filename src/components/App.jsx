import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import requestApi from './api/api';
import { Loader } from './Loader/Loader';
import Button from './Button/Button';

export class App extends Component {
  state = {
    isLoading: false,
    searchValue: '',
    modal: {
      isOpenModal: false,
      modalData: null,
    },
    imagesData: [],
    page: 1,
    totalHits: 0,
    error: null,
    showBtn: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;

    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.fetchImages(searchValue, page);
    }
  }

  handlerFormValue = ({ searchValue }) => {
    this.setState({ searchValue, imagesData: [], page: 1 });
  };

  fetchImages = async (searchValue, page) => {
    try {
      const response = await requestApi(searchValue, page);
      if (response.totalHits === 0) {
        toast.warn('Nothing was found for your request! Try again.');
        return;
      }
      this.setState(prevState => ({
        imagesData: [...prevState.imagesData, ...response.hits],
        totalHits: response.totalHits,
        showBtn: this.state.page < Math.ceil(response.totalHits / 12),
      }));

      if (response.hits.length > 0 && this.state.page === 1) {
        toast.success(`We found ${response.totalHits} images. `);
      }
      if (
        this.state.totalHits > 0 &&
        this.state.totalHits - this.state.imagesData.length <= 12
      ) {
        toast.warn(
          `There are ${
            this.state.totalHits - this.state.imagesData.length
          } or fewer images remaining.`
        );
      }
    } catch (error) {
      this.setState({ error: error.message });
      toast.warn(this.state.error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = ({ largeImageURL, tags }) => {
    this.setState({
      modal: { isOpenModal: true, modalData: { largeImageURL, tags } },
    });
  };

  closeModal = () => {
    this.setState({ modal: { isOpenModal: false, modalData: null } });
  };

  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { imagesData, isLoading, error, showBtn } = this.state;
    const { modalData, isOpenModal } = this.state.modal;

    return (
      <div>
        <Searchbar onSubmit={this.handlerFormValue} />
        {error !== null && toast.error(this.state.error)}
        {isLoading && <Loader />}
        <ImageGallery images={imagesData} openModal={this.openModal} />
        {showBtn && <Button onClick={this.loadMore} />}
        {isOpenModal && (
          <Modal
            largeImageURL={modalData.largeImageURL}
            tags={modalData.tags}
            closeModal={this.closeModal}
          />
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    );
  }
}

export default App;
