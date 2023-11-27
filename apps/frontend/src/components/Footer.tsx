function Footer() {
  return (
    <div className="bg-gray-800 w-full h-40 p-8">
      <div className="flex flex-col justify-center items-center text-gray-300">
        <div className="flex flex-wrap my-2">
          <p className="w-max mx-2">Designed & Built by Nicolas Bouffanais</p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nicolas-ignacio-bouffanais-lay-941989236/"
            title="My linkedin profile"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            href="https://github.com/N-Ignacio-Bouffanais"
            title="Nicolas.B Github Profile"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
