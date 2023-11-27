function Footer() {
  return (
    <div className="bg-[#374151] w-full h-36 p-8">
      <div className="grid grid-cols-2 text-gray-400 items-end">
        <div className="flex">
          <a
            className="m-2"
            href="https://www.linkedin.com/in/nicolas-ignacio-bouffanais-lay-941989236/"
            title="My linkedin profile"
          >
            Linkedin
          </a>
          <a
            className="m-2"
            href="https://www.youtube.com/channel/UCYQnrJVG2sKMKH6Um8ORLjQ"
            title="Nicolas.B youtube channel"
          >
            Youtube
          </a>
        </div>
        <div className="flex flex-col items-end m-2">
          <p className="w-max">Nicolas Bouffanais</p>
          <p className="">Santiago de Chile</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
