import {
  GroupButtonType,
  NavMenuType,
  PaymentMethodType,
  ProjectType,
} from "@/utils/types";
import {
  DashboardIcon,
  HomeIcon,
  MasterIcon,
  ProjectsIcon,
  ReportingIcon,
  SettingsIcon,
  SupportIcon,
  TasksIcon,
  UsersIcon,
  VisaIcon,
} from "@/assets/icons";
import {
  AccountImage,
  UserFiveImage,
  UserFourImage,
  UserOneImage,
  UserThreeImage,
  UserTwoImage,
} from "@/assets/images";

export const NavMenuItems: NavMenuType[] = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="inline mt-1 mr-4 transition-transform duration-200 transform md:-mt-1" />
    ),
  },
  {
    title: "Dashboard",
    icon: (
      <DashboardIcon className="inline mt-1 mr-4 transition-transform duration-200 transform md:-mt-0.5" />
    ),
    rightLabel: "10",
  },
  {
    title: "Projects",
    icon: (
      <ProjectsIcon className="inline mt-1 mr-4 transition-transform duration-200 transform md:-mt-1" />
    ),
  },
  {
    title: "Tasks",
    icon: (
      <TasksIcon className="inline mt-1 mr-4 transition-transform duration-200 transform md:-mt-1" />
    ),
  },
  {
    title: "Reporting",
    icon: (
      <ReportingIcon className="inline mt-1 mr-4 transition-transform duration-200 transform md:-mt-1" />
    ),
  },
  {
    title: "Users",
    icon: (
      <UsersIcon className="inline mt-1 mr-4 transition-transform duration-200 transform md:-mt-1" />
    ),
    addBreak: true,
  },
  {
    title: "Support",
    icon: (
      <SupportIcon className="inline mt-1 mr-4 transition-transform duration-200 transform md:-mt-1" />
    ),
  },
  {
    title: "Settings",
    icon: (
      <SettingsIcon className="inline mt-1 mr-4 transition-transform duration-200 transform md:-mt-1" />
    ),
  },
];

export const GroupButtonItems: GroupButtonType[] = [
  {
    title: "My details",
  },
  {
    title: "Profile",
  },
  {
    title: "Password",
  },
  {
    title: "Team",
  },
  {
    title: "Plan",
  },
  {
    title: "Billing",
  },
  {
    title: "Notifications",
  },
  {
    title: "Integrations",
  },
  {
    title: "API",
  },
];

export const PaymentMethods: PaymentMethodType[] = [
  {
    expiryDate: "Expiry 06/2024",
    last4: "Visa ending in 1234",
    isClicked: true,
    icon: <VisaIcon />,
  },
  {
    expiryDate: "Expiry 06/2024",
    last4: "Visa ending in 1234",
    isClicked: false,
    icon: <MasterIcon />,
  },
];

export const Project: ProjectType[] = [
  {
    title: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: true,
    users: [
      UserOneImage,
      UserTwoImage,
      UserThreeImage,
      UserFourImage,
      UserFiveImage,
      AccountImage,
      AccountImage,
    ],
  },
  {
    title: "Basic Plan - Nov 2022",
    amount: "USD $10.00",
    date: "Nov 1, 2022",
    status: true,
    users: [
      UserOneImage,
      UserTwoImage,
      UserThreeImage,
      UserFourImage,
      UserFiveImage,
      AccountImage,
    ],
  },
  {
    title: "Basic Plan - Oct 2022",
    amount: "USD $10.00",
    date: "Oct 1, 2022",
    status: true,
    users: [
      UserOneImage,
      UserTwoImage,
      UserThreeImage,
      UserFourImage,
      UserFiveImage,
    ],
  },
  {
    title: "Basic Plan - Sep 2022",
    amount: "USD $10.00",
    date: "Sep 1, 2022",
    status: true,
    users: [UserOneImage, UserTwoImage, UserThreeImage],
  },
  {
    title: "Basic Plan - Aug 2022",
    amount: "USD $10.00",
    date: "Aug 1, 2022",
    status: true,
    users: [UserOneImage, UserTwoImage, UserThreeImage, UserFourImage],
  },
  {
    title: "Basic Plan - Jul 2022",
    amount: "USD $10.00",
    date: "Jul 1, 2022",
    status: true,
    users: [UserOneImage, UserTwoImage, UserThreeImage, UserFourImage],
  },
  {
    title: "Basic Plan - Jun 2022",
    amount: "USD $10.00",
    date: "Jun 1, 2022",
    status: true,
    users: [UserOneImage, UserTwoImage, UserThreeImage],
  },
];
