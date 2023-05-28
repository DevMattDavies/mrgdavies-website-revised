import { useState } from "react";
import { photos } from "@/utils/allPhotos";
import {
  ContainerBackground,
  ContentContainer,
} from "@/styles/Containers/Container.styles";
import { ColorStop, Subtitle } from "@/styles/Text/Text.styles";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

export const GalleryPage = (): JSX.Element => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <ContainerBackground red>
        <ContentContainer>
          <Subtitle color={"var(--white)"}>
            Gallery<ColorStop color={"var(--black)"}>.</ColorStop>
          </Subtitle>
        </ContentContainer>
      </ContainerBackground>
      <div style={{ padding: "4rem" }}>
        <PhotoAlbum
          photos={photos}
          layout="columns"
          onClick={({ index }) => setIndex(index)}
        />
      </div>
      <Lightbox
        // TODO: Try and set zoom levels on specific images
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
        captions={{ descriptionTextAlign: "center" }}
        thumbnails={{ height: 100, width: 150 }}
      />
    </>
  );
};
