import { DotPattern } from "./ui/magicui/dot-pattern";
import { BlurFade } from "./ui/magicui/blur-fade";
const Intro = () => {
  return (
    <div>
      <BlurFade delay={0.4}>
        <div className="w-full min-h[200px] relative">
          <DotPattern glow={true} className="text-white/20" />
          <div className="flex flex-col font-bold p-4 text-white">
            <h2 className="text-[30px] md:text-[40px]">Hi, I'm Rith</h2>
            <h2 className="text-[30px] md:text-[36px]">
              A Frontend Web <span>Developer</span>
            </h2>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Intro;
