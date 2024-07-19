import SocialMediaCard from "../components/SocialMediaCard";
import Ig from "../assets/images/instagramMockUp.png";
import Image from "../assets/images/social_media.jpeg";
import Adwa from "../assets/images/Adwa.png";

const images = [Image, Image, Adwa];

const SocialMediaPage = ({ selectedCategory }) => {
  return (
    <div>
      <main className="p-6 bg-white flex flex-col md:flex-row items-center">
        {selectedCategory === "DIGITAL" && (
          <>
            <img
              className="ml-[15%] w-[250px] flex-shrink-0 md:mr-8 transition-transform transform hover:scale-105"
              src={Ig}
              alt="instagram"
            />

            <div className="flex items-center grid md:grid-cols-3 gap-8 max-w-[710px] mt-[80px]">
              {images.map((image, index) => (
                <SocialMediaCard
                  key={index}
                  description="Short description of the post"
                  image={image}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default SocialMediaPage;
