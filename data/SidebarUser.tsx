interface Props{
    label: string,
    route: string,
    imgUrl: string
}

const SidebarLinks: Props[]  = [
    {
        label: "My Resume",
        route: "/my-resume",
        imgUrl: "/assets/sidebarUser/my-resume.svg",
    },
    {
      label: "My Courses",
      route: "/my-courses",
      imgUrl: "/assets/sidebarUser/my-courses.svg",
    },
    {
      label: "My Masterpiece",
      route: "/masterpiece",
      imgUrl: "/assets/sidebarUser/my-karya.svg",
    },
    {
      label: "My Settings",
      route: "/settings",
      imgUrl: "/assets/sidebarUser/my-settings.svg",
    },
    {
      label: "My Transactions",
      route: "/transactions",
      imgUrl: "/assets/sidebarUser/my-transactions.svg",
    },
    
  ];
  
  export default SidebarLinks;