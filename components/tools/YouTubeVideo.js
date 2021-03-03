import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import GridLoader from 'react-spinners/GridLoader';
import { colors } from '@/styles/settings';

const YouTubeVideo = ({ title, videoId }) => {
  const [started, setStarted] = useState(false);

  return (
    <SYouTubeVideo>
      {!started && (
        <div className="loading">
          <GridLoader size={30} color={colors.blue} />
        </div>
      )}
      <div className={`videoPlayer${started ? ' active' : ' loading'}`}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          loop
          playing
          value={0}
          title={title || '...'}
          muted={false}
          controls
          height="100%"
          width="100%"
          onStart={() => {
            setStarted(true);
          }}
        />
      </div>
    </SYouTubeVideo>
  );
};

export default YouTubeVideo;

export const SYouTubeVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  background-color: ${colors.white};

  .videoPlayer {
    transition-duration: 0.3s;
    opacity: 0;

    &.active {
      opacity: 1;
    }
  }

  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
