import logo from "@assets/images/logo.png";

function Logo() {
  return (
    <img
      src={logo}
      alt=""
      width={40}
      height={40}
      className="rounded-full object-cover"
    />
  );
}

export default Logo;
