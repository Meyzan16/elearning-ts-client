interface Props {
  label: string,
  route: string,
  imgUrl: string
}

const SidebarLinks: Props[] = [
  {
    label: "My Resume",
    route: "/my-resume",
    imgUrl: "/assets/sidebarUser/my-resume.svg",
  },
  {
    label: "Learning Progress",
    route: "/learning-progress",
    imgUrl: "/assets/sidebarUser/learning-progress.svg",
  },
  {
    label: "My Courses",
    route: "/my-courses",
    imgUrl: "/assets/sidebarUser/my-courses.svg",
  },
  {
    label: "My Portfolios",
    route: "/masterpiece",
    imgUrl: "/assets/sidebarUser/my-karya.svg",
  },
  {
    label: "My Transactions",
    route: "/transactions",
    imgUrl: "/assets/sidebarUser/my-transactions.svg",
  },
  {
    label: "My Settings",
    route: "/settings",
    imgUrl: "/assets/sidebarUser/my-settings.svg",
  },

];

export default SidebarLinks;