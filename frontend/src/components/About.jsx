import H1 from "@/custom-components/H1";
import React from "react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];
  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-10 lg:pl-[320px] gap-7 flex flex-col min-h-screen py-4 justify-center">
      <div>
        <div className="mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center sm:pt-0 pt-10 justify-center rounded-md">
          <H1 color={"#d6482b"} content={"About Us"}></H1>
        </div>
        <p className="text-xl text-stone-600 text-center">
          {" "}
          Welcome to BidMaster, the ultimate destination for online auctions and
          bidding excitements. Founded in 2024, we are dedicated to providing a
          dynamic and user-friendly platform for buyers and sellers to connect,
          explore, and transact in a secure and seamless environment.
        </p>
      </div>
      <div>
        <div className="mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center sm:pt-0 pt-10 justify-center rounded-md">
          <h1 className="text-[#111] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
            Our Mission
          </h1>
        </div>
        <p className="text-xl text-stone-600 text-center">
          {" "}
          At BidMaster, our mission is to revolutionize the way people buy and
          sell items online. We strive to create an engaging and trustworthy
          marketplace that empowers individuals and businesses to discover
          unique products, make informed decisions, and enjoy the thrill of
          competitive bidding.
        </p>
      </div>
      <div>
        <div className="mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center sm:pt-0 pt-10 justify-center rounded-md">
          <h1 className="text-[#111] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
            Our Values
          </h1>
        </div>
        <ul className="list-inside">
          {values.map((element) => {
            return (
              <li className="text-xl text-stone-600 mb-2" key={element.id}>
                <span className="text-black font-bold">{element.title}: </span>
                {element.description}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center sm:pt-0 pt-10 justify-center rounded-md">
          <h1 className="text-[#111] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
            Our Story
          </h1>
        </div>
        <p className="text-xl text-stone-600 text-center">
          {" "}
          Founded by Vishesh Dalmia, BidMaster was born out of a passion for
          connecting people with unique and valuable items. With years of
          experience in the auction industry, our team is committed to creating
          a platform that offers an unparalleled auction experience for users
          worldwide.
        </p>
      </div>
      <div>
        <div className="mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center sm:pt-0 pt-10 justify-center rounded-md">
          <h1 className="text-[#111] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
            Join Us
          </h1>
        </div>
        <p className="text-xl text-stone-600 text-center">
          {" "}
          Whether you're looking to buy, sell, or simply explore, BidMaster
          invites you to join our growing community of auction enthusiasts.
          Discover new opportunities, uncover hidden gems, and experience the
          thrill of winning your next great find.
        </p>
      </div>
      <div>
        <p className="text-[#d6482b] text-xl font-bold mb-3 text-center">
          Thank you for choosing BidMaster. We look forward for being a part of
          your auction journey!
        </p>
      </div>
    </section>
  );
};

export default About;
