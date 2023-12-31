import { Stand } from "../../components";
import "./about.css";

const About = () => {
  return (
    <section className="about__section section">
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="stands">
        <Stand
          title="Bamboo Stand"
          info="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          pledge="25"
          leftNumber="101"
          btn="Select Reward"
        />
        <Stand
          title="Black Edition Stand"
          info="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          pledge="75"
          leftNumber="64"
          btn="Select Reward"
        />
        <Stand
          title="Mahogany Special Edition"
          info="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          pledge="200"
          leftNumber="0"
          btn="Out of Stock"
        />
      </div>
    </section>
  );
};

export default About;
