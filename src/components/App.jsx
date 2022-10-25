import React from "react";
import { MutatingDots } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import PixabayAPI from "./PixabayAPI/PixabayAPI";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

class App extends React.Component {

  state = {
    queryImages: '',
    images: [],
    isLoading: false,
  }

 async componentDidMount() {
   this.setState({ isLoading: true });
    const query = this.state.queryImages;

    try {
      const images = await PixabayAPI.fetchImagesByQuery(query);
      this.setState({ images });

    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
   }
  }

  handleFormSubmit = (query) => {
    this.setState({ queryImages: query})
  }

  render() {
    const { queryImages, isLoading } = this.state;
      // console.log(this.state.images)
    return(
      <>
        <ToastContainer autoClose={3000} theme={"dark"} icon={false}/>
        <Searchbar onSearch={this.handleFormSubmit } />
        {this.state.showModal && <MutatingDots /> }
        <button type="button" onClick={this.toggleModal}>Open modal</button>
        {/* <Modal onClose={this.toggleModal}>
          <ImageGalleryItem />
        </Modal>  */}

        <ImageGallery queryImages={queryImages} />

  </>
  )};
}

export default App;