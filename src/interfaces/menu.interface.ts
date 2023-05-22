export enum NavigationCategory {
    Home,
    Viber,
    Email,
    Sms,
}

export enum MenuCategory {
    Campaigns,
    Audience,
    Analytics,
    Settings,
}

export enum AccountMenuCategory {
    Profile,
    Users,
    Documents,
    Notification,
    Billing,
    Pricing,
}

export interface NavItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: NavigationCategory;
}

export interface MenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: MenuCategory;
}

export interface AccountMenuItem {
    route: string;
    name: string;
    id: AccountMenuCategory;
}
