type Props = {
    Id:number,
    name: string,
    url: string
}

export const NavItemsData: Props[]  = [
    {
      Id:1,
      name: "Home",
      url: "/",
    },
    {
      Id:2,
      name: "Courses",
      url: "/courses",
    },
    {
      Id:3,
      name: "About",
      url: "/about",
    },
    {
      Id:4,
      name: "Policy",
      url: "/policy",
    },
    {
      Id:5,
      name: "FAQ",
      url: "/faq",
    },
];

export const usersNavOptions: Props[]  = [
  {
    Id: 1,
    name: "Progress Belajar",
    url: "/admin-view/all-products",
},
{
    Id: 2,
    name: "My Courses",
    url: "/admin-view/all-products",
},
{
    Id: 3,
    name: "My Ebooks",
    url: "/admin-view/add-product",
},
{
  Id: 4,
  name: "My Portopolio",
  url: "/admin-view/add-product",
},
{
  Id: 5,
  name: "My Transactions",
  url: "/admin-view/add-product",
},
{
  Id: 6,
  name: "My Notification",
  url: "/admin-view/add-product",
},
{
  Id: 7,
  name: "My settings",
  url: "/admin-view/add-product",
},
{
  Id: 8,
  name: "Logout",
  url: "/admin-view/add-product",
},
];

  