import { IonButton } from "@ionic/react";
import "./ExploreContainer.css";
import { Share } from "@capacitor/share";

interface ContainerProps {}

const share = async () => {
  await Share.share({
    title: "Check out this Post",
    text: "Really awesome thing you need to see right now",
    url: "https://ionicframework.com/docs/native/share",
  });
};

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonButton onClick={() => share()}>Share</IonButton>
    </div>
  );
};

export default ExploreContainer;
