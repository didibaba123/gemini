import { Composition } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { ProfilePage } from "./ProfilePage";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ProfilePage"
        component={ProfilePage}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
