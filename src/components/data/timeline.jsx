// timeline.jsx
import React from "react"; // Optional in React 18+ with new JSX transform
import graduatePic from "@/assets/img/graduate.jpg";
import RuppLogo from "@/assets/img/RUPP_logo.png";
import RuppImg from "@/assets/img/rupp-img.avif";
import WebDev from "@/assets/img/Frontend-Development.webp";
export const timelineData = [
  {
    title: "2022 - Present",
    content: (
      <div>
        <p className="text-neutral-500 dark:text-neutral-300">
          I started college in Royal University Of Phnom Penh with an expected
          graduation in 2025
        </p>
        <div className="flex gap-5">
          <img
            src={RuppLogo}
            alt="Learning"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
          <img
            src={RuppImg}
            alt="Learning"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-500 dark:text-neutral-300">
          Took a frontend Web development course at Instinct Institute
        </p>
        <div className="flex gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWu7emhCoTP7Cc47G_i4L-8WmnbrnDKW5Cw&s"
            alt="Learning"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
          <img
            src={WebDev}
            alt="Learning"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-500 dark:text-neutral-300">
          Graduate from sovannaphumi English School
        </p>
        <div className="flex gap-2">
          <img
            src="https://media.licdn.com/dms/image/v2/C5103AQF9cWQCCjQCsg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1579224945666?e=2147483647&v=beta&t=chEQC6MHfvLyapOQfmIPqF_a85PKpwhfvxSlEYtSj-k"
            alt="SPS School"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
          <img
            src={graduatePic}
            alt="Graduate"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2019 - 2021",
    content: (
      <div>
        <p className="text-neutral-500 dark:text-neutral-300">
          Studied at sisowath highschool
        </p>
        <div className="flex gap-2">
          <img
            src="https://www.cambodiayp.com/img/kh/b/1670846017-61-sisowath-high-school.jpg"
            alt="ssw School"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrCinfOoBXdPZ55IW-afBRPxQgEOyRIrGYw&s"
            alt="ssw"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2014 - 2018",
    content: (
      <div>
        <p className="text-neutral-500 dark:text-neutral-300">
          Finish Chaktomuk Primary and Secondary School
        </p>
        <div className="flex gap-2">
          <img
            src="https://www.khmertimeskh.com/wp-content/uploads/2020/07/Chaktomuk-Junior-High-School.jpg"
            alt="ctm School"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
          <img
            src="https://nets.unescoapceiu.org/cmm/fms/getImage.do?atchFileId=FILE_000000000003144&fileSn=0"
            alt="ctm"
            className="mt-4 w-30 h-30 max-w-sm rounded-lg object-cover"
          />
        </div>
      </div>
    ),
  },
];
