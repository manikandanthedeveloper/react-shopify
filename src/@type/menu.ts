export interface MenuItem {
     id: string;
     title: string;
     url: string;
     type: string;
     items?: MenuItem[];
}