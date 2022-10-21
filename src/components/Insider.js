import React from "react";
import enhanced_story from "../assets/media/enhanced-story-jacques.mp4";

const Insider = () => {
    return (
      <div className="insider">
        <section>
          <div>
            Enhanced Story
            <video 
              src={enhanced_story} 
              alt="ehanced story video example"
              type="video/mp4"
              controls autostart
            />
          </div>
          <div>My Feed</div>
          <div>Live Feed</div>
          <div></div>
        </section>
      </div>
    
    )
};

export default Insider;