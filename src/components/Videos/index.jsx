import React from 'react'

const Videos = ({ videos = [] }) => {
  return videos.length === 0 ? (
        <h1>No videos found.</h1>
    ) : (
        <div>
            {videos.map((video, idx) => (
                <h3 key={idx}>{video}</h3>
            ))}
        </div>
    )
}

export default Videos