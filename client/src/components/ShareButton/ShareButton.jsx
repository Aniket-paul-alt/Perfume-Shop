// src/components/ShareButton.js

import React from 'react'; // Import React
import { ButtonGroup, Button } from 'react-bootstrap'; // Import Bootstrap components
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons'; // Import Bootstrap Icons

function ShareButton({ product }) {
  const shareUrl = window.location.href; // Get the current URL
  const title = encodeURIComponent(`Check out this perfume: ${product.name}`); // Encode the product name for sharing
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`; // Facebook share URL
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${title}`; // Twitter share URL
  const instagramShare = `https://www.instagram.com/`; // Instagram doesn't support direct sharing via URL

  return (
    <ButtonGroup className="mt-3 gap-3"> {/* Button group with margin and gap */}
      <Button className='d-flex justify-content-center align-self-center rounded-circle' variant="primary" href={facebookShare} target="_blank">
        <Facebook /> {/* Facebook Icon */}
      </Button>
      <Button className='d-flex justify-content-center align-self-center rounded-circle' variant="info" href={twitterShare} target="_blank">
        <Twitter /> {/* Twitter Icon */}
      </Button>
      <Button className='d-flex justify-content-center align-self-center rounded-circle' variant="danger" href={instagramShare} target="_blank">
        <Instagram /> {/* Instagram Icon */}
      </Button>
    </ButtonGroup>
  );
}

export default ShareButton; // Export the ShareButton component
