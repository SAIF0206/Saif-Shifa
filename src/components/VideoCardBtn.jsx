import React from "react";
import Button from "./Button";
import Section from "./section";

function VideoCardBtn() {
  return (
    <Section className="overflow-hidden">
      <div className="container md:pb-10">
        <div className="flex justify-center mt-6">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://youtube.com/shorts/2J9ieogE3T8?feature=share",
                "_blank"
              );
            }}
            white
          >
            Click Me
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default VideoCardBtn;
