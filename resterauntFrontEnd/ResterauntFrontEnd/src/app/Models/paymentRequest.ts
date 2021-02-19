import { MenuItem } from "../Objects/menuItem";
export class PaymentRequest {
    
    orderId: string;
    menu: MenuItem[];
    cardNumber: string;
    expDate: string;
    securityCode: string;
    nameOnCard: string;
    address: string;
}