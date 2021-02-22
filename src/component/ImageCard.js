import React from 'react';

class ImageCard extends React.Component{
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight)
  }

  render() {
    const {alt_description, urls} = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
};

export default ImageCard;