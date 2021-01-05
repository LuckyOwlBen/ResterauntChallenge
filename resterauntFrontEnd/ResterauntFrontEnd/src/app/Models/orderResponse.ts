import { MenuItem } from '../Objects/menuItem';

export class OrderResponse {
    menu: MenuItem[];
    orderId: string;
    subtotal: string;
    total: string;
}