import { Crimson_Text } from "next/font/google";

const font = Crimson_Text({
  weight: ["400"],
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <div className={font.className}>
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        .h
      </h2>
    </div>
  );
};

export default Logo;
