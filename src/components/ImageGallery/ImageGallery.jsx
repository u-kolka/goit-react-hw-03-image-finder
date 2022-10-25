import { Component } from 'react';
import PropTypes from 'prop-types'; 
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import PixabayAPI  from 'components/PixabayAPI/PixabayAPI';
 
export class ImageGallery extends Component {

    // static propTypes = {
    //     searchQuery: PropTypes.string.isRequired,
    // };
    
    state = {
        images: [],
        error: null,
    };

    componentDidUpdate(prevProps) {
    const { queryImages } = this.props;
    const prevQuery = prevProps.queryImages;
    const nextQuery = this.props.queryImages;

        console.log(queryImages)
    if (prevQuery !== nextQuery) {
      this.setState({ isLoaded: true });

        PixabayAPI.fetchImagesByQuery(nextQuery)
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }));
    }
  }
    
    render() {
        const { images } = this.state;
        return (
            <ul className="gallery">
                {images.map(elem =>
                    <ImageGalleryItem key={elem.id} image={elem.webformatURL} tags={elem.tags} />
                )}
            </ul>)
    }
}