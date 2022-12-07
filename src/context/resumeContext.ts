import React from "react";

export const initialState = {
  profile: {
    name: "姓名",
    about: "JavaScript",
    email: "8511039XX@qq.com",
    mobile: "159XXXXXXX",
    github: "https://github.com/z851103999",
    home: "",
    workPlace: "天津",
    positionTitle: "前端工程师",
  },
  avatar: {
    url: "https://p6-passport.byteacctimg.com/img/user-avatar/585e1491713363bc8f67d06c485e8260~300x300.image",
    display: true,
    circle: true,
    theme: "1",
  },
  skillList: [
    {
      name: "HTML / CSS",
      desc: "",
      level: 5,
    },
    {
      name: "TypeScript / JavaScript",
      desc: "熟练 JavaScript，丰富的 ts 项目经验",
      level: 4,
    },
    {
      name: "Koa/Nest",
      desc: "Nodejs开发经验",
      level: 3,
    },
    {
      name: "React/Vue",
      desc: "前端项目经验以及组件库开发经验",
      level: 4,
    },
  ],
  educationList: [
    {
      time: ["2012.09", "2016.06"],
      school: "XXXX大学",
      major: "计算机科学",
      degree: "本科",
    },
  ],
  awardList: [
    {
      info: "英语 CET6",
      time: "2015",
    },
  ],
  workExpList: [
    {
      company: "XX集团",
      department: "体验技术部",
      time: ["2018.06", "至今"],
      desc: "工作经验列表",
    },
  ],
  projectList: [
    {
      name: "简历生成器",
      role: "开发者",
      time: ["2017.03", "2017.05"],
      desc: "在线填写简历，一键导出 PDF",
      content: "项目难点\n1. 前端在线渲染PDF \n2. PDF 中样式设置",
    },
  ],
};

export type State = typeof initialState;

type ACTIONTYPE = { type: "save"; payload: any } | { type: "restore" };

interface AppContextInterface {
  state: State;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const ResumeContext = React.createContext<AppContextInterface>({
  state: initialState,
  dispatch: (action) => action,
});

export function reducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "save":
      localStorage.setItem(
        "refuseme_data",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    case "restore":
      localStorage.removeItem("refuseme_data");
      return initialState;
    default:
      throw new Error();
  }
}