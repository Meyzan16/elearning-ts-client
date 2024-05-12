interface props {
  title: string;
  img: string;
  kategoriAccess: IKategoriAccess[];
}

interface IKategoriAccess {
  name: string;
  value: string;
}

const MyDataCourses: props[] = [
  {
    title: "full stack javascript developer : website travel",
    img: "/assets/mycourses/1.png",
    kategoriAccess: [{ name: "premium", value: "premium" }],
  },
  {
    title: "Blunder : Design 3D Illustration",
    img: "/assets/mycourses/2.png",
    kategoriAccess: [{ name: "Starter", value: "starter" }],
  },
  {
    title: "Vue Javascript framework",
    img: "/assets/mycourses/3.png",
      kategoriAccess: [{ name: "Starter", value: "starter" }],
  },
  {
    title: "PHP Laravel web development",
    img: "/assets/mycourses/1.png",
      kategoriAccess: [{ name: "Starter", value: "starter" }],
  },
];

export default MyDataCourses