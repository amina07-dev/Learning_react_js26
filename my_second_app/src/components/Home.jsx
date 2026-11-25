import Flower from "../assets/Flower.jpg";
import Lily from "../assets/Lily.jpg";
const Home = () => {
  return (
    <div>
      <section className="bg-accent" id="home">
        <div className="container">
          <div className="row">
            <div className="md:col-6 p-6 fg-contrast-primary">
              <h1>Welcome to My site</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                est inventore perferendis, deserunt ad veniam facere vel, ipsum
                a saepe voluptas eos explicabo optio fugiat magni ut cupiditate
                veritatis rem vitae ipsa culpa vero ducimus facilis! Eius
                consectetur distinctio quibusdam quam. Asperiores cumque
                quibusdam eveniet repudiandae delectus. Ipsa, eligendi soluta?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                est inventore perferendis, deserunt ad veniam facere vel, ipsum
                a saepe voluptas eos explicabo optio fugiat magni ut cupiditate
                veritatis rem vitae ipsa culpa vero ducimus facilis! Eius
                consectetur distinctio quibusdam quam. Asperiores cumque
                quibusdam eveniet repudiandae delectus. Ipsa, eligendi soluta?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                est inventore perferendis, deserunt ad veniam facere vel, ipsum
                a saepe voluptas eos explicabo optio fugiat magni ut cupiditate
                veritatis rem vitae ipsa culpa vero ducimus facilis! Eius
                consectetur distinctio quibusdam quam. Asperiores cumque
                quibusdam eveniet repudiandae delectus. Ipsa, eligendi soluta?
              </p>
            </div>
            <div className="md:col-6">
              <img src={Lily} alt="FlowerImage" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
