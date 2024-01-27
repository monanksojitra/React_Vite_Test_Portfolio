import React from "react";
import Iframe from "react-iframe";
import { LinkedInEmbed } from "react-social-media-embed";

const Test = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <LinkedInEmbed
        url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7154721239549280257"
        postUrl="https://www.linkedin.com/posts/monanksojitra_responsiverevolution-figmatoreact-tailwindmagic-activity-7154721306490372096-U4RR?utm_source=share&utm_medium=member_desktop"
        width={325}
        height={570}
      /> */}
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7154721239549280257"
        height="980"
        width="504"
        frameborder="0"
        allowfullscreen=""
        title="Embedded post"
      ></iframe>
    </div>
  );
};

export default Test;
