export type RequestType = 
  | 'iray_dr' 
  | 'field_partner' 
  | 'fuji_repair' 
  | 'portable_buy' 
  | 'portable_rent' 
  | 'remote_support' 
  | 'billing_inquiry' 
  | 'general';

export interface QuoteFormData {
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  region: 'Northern Illinois' | 'Southern Wisconsin' | 'Greater Chicago' | 'Other Region';
  requestType: RequestType;
  details: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  brand: string;
  category: 'mobile_xray' | 'dr_panels' | 'cr_readers' | 'pacs_pc' | 'cd_burners';
  priceDisplay: string;
  status: 'In Stock' | 'Refurbished - Ready' | 'Rental Available' | 'New Unit';
  description: string;
  specs: string[];
  warranty: string;
  image?: string;
  popular?: boolean;
}

export interface FujiDiagnosticOption {
  model: string;
  symptoms: {
    id: string;
    label: string;
    description: string;
    likelyCause: string;
    actionPlan: string;
    estimatedSavings: string;
  }[];
}

export interface SupportTicket {
  ticketId: string;
  clientName: string;
  facility: string;
  urgency: 'Low' | 'Medium' | 'Critical / Emergency';
  systemType: string;
  issueDescription: string;
  status: 'Received' | 'Tech Assigned' | 'Remote Session Pending';
  timestamp: string;
}

export interface PaymentSimulation {
  accountNumber: string;
  invoiceNumber: string;
  clientName: string;
  amount: number;
  serviceCategory: string;
  paymentMethod: 'Credit Card' | 'ACH Transfer' | 'Company Check';
}

export interface RegionTerritory {
  state: 'IL' | 'WI';
  county: string;
  cities: string[];
  responseTime: string;
  primaryTechs: number;
}
